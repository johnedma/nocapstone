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


@app.route("/likes", methods=['PUT'])
@login_required
def update_likes():
    # db.session.remove()
    likes = request.json.get("likes")
    print("*******LIKES via REQ************")
    print(likes)
    print("*******USER LIKES************")
    current_user.likes = likes
    db.session.commit()
    print(current_user.likes)
    return {'likes': current_user.likes}, 200
    current_song_id = request.json.get('currentSongId', None)
    song = Song.query.filter(Song.id == current_song_id)[0]
    print(song.title)
    print(current_song_id)
    if song.to_dict() not in current_user.likes:
        # current_user.likes.updateappend(song)
        # current_user.update({"likes": (User.likes.append(song))})
        # current_user.likes = [current_user.likes.append(song.to_dict())]
        # current_user.likes = [song.to_dict()]
        current_user.likes = [*current_user.likes, song.to_dict()]
        db.session.commit()
        # db.session.remove()
        # print(True)
        return {'likes': current_user.likes}, 200
    else:
        # current_user.likes = current_user.likes.remove(
        #     current_user.likes.filter(current_user.likes.id == current_song_id))
        # print(current_user.likes[song.id-1])
        # current_user.likes = [*current_user.likes.remove(song.to_dict())]
        # db.session.remove(current_user.likes.song.to_dict())
        current_user.likes.remove(song.to_dict())
        # likes = current_user.likes
        # print("--------NEWLIKES----------")
        # print(likes)
        # user = User.query.filter(User.id == current_user.id).scalar()
        # print(user)
        # print("----------user query likes----------")
        # print(user.likes)
        print("----------current_user likes----------")
        # current_user.likes.clear()
        print(current_user.likes)
        # db.session.add(current_user)
        # current_user.likes = likes
        # current_user.likes = [*likes]
        # current_user.likes.append(likes)
        # print(current_user.likes)
        db.session.commit()
        # db.session.close()
        print(current_user.likes)
        # return {'likes': user.likes}, 200
        return {'likes': current_user.likes}, 200
        # return {'likes': current_user.likes.to_dict()}, 200
    #    list comp outputs array
    # data = [song.to_dict() for song in songs]
    # print(data)
    # return {"chart_songs": data}, 200
    # print(current_user.username)
