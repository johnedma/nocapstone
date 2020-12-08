from flask import Blueprint, jsonify
from nwo.models import Song
song_routes = Blueprint('song_routes', __name__)


@song_routes.route("/chartlist")
def chart_list():
    songs = Song.query.filter(Song.on_chart == True).all()
#    list comp outputs array
    data = [song.to_dict() for song in songs]
    print(data)
    return {"chart_songs": data}, 200
