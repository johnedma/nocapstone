import os
from flask import Blueprint, jsonify, request
import googleapiclient.errors
from googleapiclient.discovery import build

more_waves = Blueprint('morewaves', __name__)
YT_KEY = os.environ.get("YT_KEY")


@more_waves.route('/', methods=["POST"])
def index():
    # def main():
    # response = User.query.all()
    # return {"users": [user.to_dict() for user in response]}

    # -*- coding: utf-8 -*-

    # Sample Python code for youtube.channels.list
    # See instructions for running these code samples locally:
    # https://developers.google.com/explorer-help/guides/code_samples#python

    # from .config import Config

    # import google_auth_oauthlib.flow
    # import googleapiclient.discovery

    # scopes = ["https://www.googleapis.com/auth/youtube.readonly"]

    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    # os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    # api_service_name = "youtube"
    # api_version = "v3"
    # client_secrets_file = "YOUR_CLIENT_SECRET_FILE.json"

    # Get credentials and create an API client
    # flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
    #     client_secrets_file, scopes)
    # credentials = flow.run_console()
    # credentials = (Config.YT_KEY, scopes)
    data = request.get_json()
    print(data)
    api_key = YT_KEY
    youtube = build("youtube", "v3", developerKey=api_key)
    #  credentials=credentials)

    req = youtube.search().list(
        part="snippet",
        type="video",
        maxResults=25,
        order="viewCount",
        q=data["id"]

    )
    response = req.execute()

    # print(api_key)
    return(response)

    # if __name__ == "__main__":
    #     main()


# @more_waves.route('/artist', methods=["POST"])
@more_waves.route('/artist')
def artist():
    data = request.get_json()

    api_key = YT_KEY
    youtube = build("youtube", "v3", developerKey=api_key)

    # nuwaves = {

    # }
    req = youtube.channels().list(
        part="snippet,contentDetails,statistics",
        id="UClVY6MdQxTZUaMDL-dLQDcw",
        # id="UC_x5XG1OV2P6uZZ5FSM9Ttw",
        # maxResults=10,

    )
    response = req.execute()
    print(response)
    return(response)
