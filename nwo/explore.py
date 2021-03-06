# -*- coding: utf-8 -*-

# Sample Python code for youtube.channels.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/guides/code_samples#python

import googleapiclient.errors
from googleapiclient.discovery import build
import os
# from .config import Config
YT_KEY = os.environ.get("YT_KEY")

# import google_auth_oauthlib.flow
# import googleapiclient.discovery

scopes = ["https://www.googleapis.com/auth/youtube.readonly"]


def main():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    # os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    # client_secrets_file = "YOUR_CLIENT_SECRET_FILE.json"

    # Get credentials and create an API client
    # flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
    #     client_secrets_file, scopes)
    # credentials = flow.run_console()
    # credentials = (Config.YT_KEY, scopes)
    api_key = YT_KEY
    youtube = build("youtube", "v3", developerKey=api_key)
    #  credentials=credentials)

    request = youtube.channels().list(
        part="snippet,contentDetails,statistics",
        id="UC_x5XG1OV2P6uZZ5FSM9Ttw",
        # maxResults=10,
        # type='video',   q="Ariana Grande"
    )
    response = request.execute()

    # print(api_key)
    print(response)


if __name__ == "__main__":
    main()
