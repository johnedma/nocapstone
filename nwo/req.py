from flask import app
import musicbrainzngs

musicbrainzngs.set_useragent(app, 0.7)

# artist_id = "c5c2ea1c-4bde-4f4d-bd0b-47b200bf99d6"
# try:
#     result = musicbrainzngs.get_artist_by_id(artist_id)
# except WebServiceError as exc:
#     print("Something went wrong with the request: %s" % exc)
# else:
#     artist = result["artist"]
#     print("name:\t\t%s" % artist["name"])
#     print("sort name:\t%s" % artist["sort-name"])

# musicbrainzngs.search_artists(query='', limit=None, offset=None, strict=False, **fields)
result = musicbrainzngs.search_artists(
    query='', limit=None, offset=None, strict=False, tag="rap")
artist_list = result["artist-list"]

print(result)
print(artist_list)
