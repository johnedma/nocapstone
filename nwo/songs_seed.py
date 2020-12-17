import csv
with open('songs.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        # print(row)
        print({"title": row['Track Name'], "artist": row['Artist Name'],
               "url": row['YouTube URL'], "cover": row['YouTube URL']+"/0.jpg"})

# format
# {"title": " Life Is Good", "artist": "Future x Drake", "url": "https://www.youtube.com/watch?v=l0U7SxXHkPY",    "cover": "http://img.youtube.com/vi/l0U7SxXHkPY/0.jpg"}
