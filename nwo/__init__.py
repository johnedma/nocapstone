import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import (
    LoginManager,
    current_user,
    login_user,
    logout_user,
    login_required
)

from nwo.models import db, User, Song
from nwo.api.user_routes import user_routes
from nwo.api.song_routes import song_routes
from nwo.api.more_waves import more_waves
from nwo.api.nu_news import nu_news
# from nwo.api.auth_routes import auth_routes

from nwo.config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(more_waves, url_prefix='/api/morewaves')
app.register_blueprint(nu_news, url_prefix='/api/nunews')
app.register_blueprint(song_routes, url_prefix='/api/songs')
db.init_app(app)
login_manager = LoginManager(app)

# Application Security
CORS(app)
# CSRFProtect(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie('csrf_token',
                        generate_csrf(),
                        secure=True if os.environ.get('FLASK_ENV') else False,
                        samesite='Strict' if os.environ.get(
                            'FLASK_ENV') else None,
                        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')


# @app.route('/api/csrf/restore')
# def restore_csrf():
#     id = current_user.id if current_user.is_authenticated else None
#     return {'csrf_token': generate_csrf(), 'current_user_id': id}


@app.route('/login', methods=['GET', 'POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not username or not password:
        return {"errors": ["Missing required parameters"]}, 400

    authenticated, user = User.authenticate(username, password)
    print(authenticated)
    print(user)
    if authenticated:
        login_user(user)
        return {"current_user_id": current_user.id, "current_user": current_user.to_dict()}

    return {"errors": ["Invalid username or password"]}, 401


@app.route('/signup', methods=['POST'])
def signup():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)
    password2 = request.json.get('password2', None)
    # email = request.json.get('email', None)

    if not username or not password:
        return {"errors": ["Missing required parameters"]}, 400

    if not password == password2:
        return {"errors": ["Passwords must match each other"]}, 400

    new_user = User(
        username=username,
        password=password,
        likes=[]
        # email=email,
        # created_at=datetime.now(),
        # updated_at=datetime.now()
    )
    db.session.add(new_user)
    db.session.commit()
    # return redirect('/api/users')

    authenticated, user = User.authenticate(username, password)
    print(authenticated)
    print(user)
    if authenticated:
        login_user(user)
        return {"current_user_id": current_user.id, "current_user": current_user.to_dict()}

    return {"errors": ["Invalid username, email, and/or password"]}, 401


@app.route("/logout", methods=['POST'])
@login_required
def logout():
    logout_user()
    return {'msg': 'You have been logged out'}, 200


@app.route('/restore')
def restore():
    id = current_user.id if current_user.is_authenticated else None
    user = None if not current_user.is_authenticated else current_user.to_dict()
    if current_user:
        # return {'csrf_token': generate_csrf(), 'current_user_id': id, "current_user": user}
        return {"current_user_id": id, "current_user": user}


@app.route("/likes", methods=['POST'])
@login_required
def update_likes():
    print(current_user)
    print(current_user.likes)
    # response = User.query.all()
    # return {"users": [user.to_dict() for user in response]}

# vvv-- BOILERPLATE IN OG STARTER --vvv
