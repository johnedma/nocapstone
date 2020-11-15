from flask import Blueprint, jsonify
from nwo.models import User
from flask_login import current_user, login_required
user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/<int:id>', methods=['GET', 'POST'])
def user_detail(id):
    return {}

# from flask import Blueprint, jsonify
# from nwo.models import User

# user_routes = Blueprint('users', __name__)


# @user_routes.route('/')
# def index():
#     response = User.query.all()
#     return {"users": [user.to_dict() for user in response]}
