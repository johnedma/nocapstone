from nwo.models import User, Song
from nwo import app, db
from dotenv import load_dotenv
load_dotenv()


#     song_one = Song(title="What That Speed Bout?!", artist="Nicki Minaj & NBA YoungBoy",
#                     url="https://www.youtube.com/watch?v=BmzFSKGwx54", cover="http://img.youtube.com/vi/BmzFSKGwx54/0.jpg", on_chart=True)
chartList = [{"title": "What That Speed Bout?!", "artist": "Nicki Minaj & NBA YoungBoy", "url": "https://www.youtube.com/watch?v=BmzFSKGwx54", "cover": "http://img.youtube.com/vi/BmzFSKGwx54/0.jpg"},
             {"title": " Life Is Good", "artist": "Future x Drake", "url": "https://www.youtube.com/watch?v=l0U7SxXHkPY",
              "cover": "http://img.youtube.com/vi/l0U7SxXHkPY/0.jpg"},
             {"title": " Wishing Well", "artist": "Juice WRLD", "url": "https://www.youtube.com/watch?v=C5i-UnuUKUI",
                 "cover": "http://img.youtube.com/vi/C5i-UnuUKUI/0.jpg"},
             {"title": "Hit Different", "artist": "SZA ft TY Dolla $ign",
              "url": "https://www.youtube.com/watch?v=qJlMkMtK7-8", "cover": "http://img.youtube.com/vi/qJlMkMtK7-8/0.jpg"},
             {"title": "positions", "artist": "Ariana Grande", "url": "https://www.youtube.com/watch?v=tcYodQoapMg",
              "cover": "http://img.youtube.com/vi/tcYodQoapMg/0.jpg"},
             {"title": "Forever After All", "artist": "Luke Combs", "url": "https://www.youtube.com/watch?v=fmbLCMGtEQc",
              "cover": "http://img.youtube.com/vi/fmbLCMGtEQc/0.jpg"},
             {"title": "Golden", "artist": "Harry Styles", "url": "https://www.youtube.com/watch?v=P3cffdsEXXw",
              "cover": "http://img.youtube.com/vi/P3cffdsEXXw/0.jpg"},
             {"title": "Tyler Herro", "artist": "Jack Harlow", "url": "https://www.youtube.com/watch?v=np9Ub1LilKU",
              "cover": "http://img.youtube.com/vi/np9Ub1LilKU/0.jpg"},
             {"title": "SO DONE", "artist": "The Kid Laroi", "url": "https://www.youtube.com/watch?v=yasj3j76SyM",
              "cover": "http://img.youtube.com/vi/yasj3j76SyM/0.jpg"},
             {"title": "BICHOTA", "artist": "Karol G", "url": "https://www.youtube.com/watch?v=QaXhVryxVBk",
              "cover": "http://img.youtube.com/vi/QaXhVryxVBk/0.jpg"},
             {"title": "I CAN'T STOP ME", "artist": "TWICE", "url": "https://www.youtube.com/watch?v=CM4CkVFmTds",
              "cover": "http://img.youtube.com/vi/CM4CkVFmTds/0.jpg"},
             {"title": "Snitch", "artist": "Joyner Lucas", "url": "https://www.youtube.com/watch?v=74HaJcmgUBw",
              "cover": "http://img.youtube.com/vi/74HaJcmgUBw/0.jpg"},
             {"title": "Promiscuous (feat. Timbaland)", "artist": "Nelly Furtado",
              "url": "https://www.youtube.com/watch?v=0J3vgcE5i2o", "cover": "http://img.youtube.com/vi/0J3vgcE5i2o/0.jpg"},
             {"title": "Damage", "artist": "H.E.R.", "url": "https://www.youtube.com/watch?v=PAFAfhod9TU",
              "cover": "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg"},
             {"title": "Hold On", "artist": "Chord Overstreet", "url": "https://www.youtube.com/watch?v=8ofCZObsnOo",
              "cover": "http://img.youtube.com/vi/8ofCZObsnOo/0.jpg"},
             {"title": "La TÃ³xica", "artist": "Farruko", "url": "https://www.youtube.com/watch?v=puugRJxgdt4",
              "cover": "http://img.youtube.com/vi/puugRJxgdt4/0.jpg"},
             {"title": "Sweater Weather", "artist": "The Neighbourhood", "url": "https://www.youtube.com/watch?v=GCdwKhTtNNw",
              "cover": "http://img.youtube.com/vi/GCdwKhTtNNw/0.jpg"},
             {"title": "the story of O.J.", "artist": "YoungBoy Never Broke Again", "url": "https://www.youtube.com/watch?v=B2J3kLJ8PQk", "cover": "http://img.youtube.com/vi/B2J3kLJ8PQk/0.jpg"}]

with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='demo',
                password="password", likes=[
                    {"title": "SO DONE", "artist": "The Kid Laroi", "url": "https://www.youtube.com/watch?v=yasj3j76SyM",
                         "cover": "http://img.youtube.com/vi/yasj3j76SyM/0.jpg"},
                    {"title": "positions", "artist": "Ariana Grande", "url": "https://www.youtube.com/watch?v=tcYodQoapMg",
                     "cover": "http://img.youtube.com/vi/tcYodQoapMg/0.jpg"},
                    {"title": "Tyler Herro", "artist": "Jack Harlow", "url": "https://www.youtube.com/watch?v=np9Ub1LilKU",
                     "cover": "http://img.youtube.com/vi/np9Ub1LilKU/0.jpg"},
                    {"title": "Damage", "artist": "H.E.R.", "url": "https://www.youtube.com/watch?v=PAFAfhod9TU",
                     "cover": "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg"},
                    {"title": "the story of O.J.", "artist": "YoungBoy Never Broke Again",
                     "url": "https://www.youtube.com/watch?v=B2J3kLJ8PQk", "cover": "http://img.youtube.com/vi/B2J3kLJ8PQk/0.jpg"}
                ])
    javier = User(username='javier',
                  # email='javier@aa.io',
                  password="password", likes=[])
    dean = User(username='dean',
                # email='dean@aa.io',
                password="password", likes=[])
    angela = User(username='angela',
                  # email='angela@aa.io',
                  password="password", likes=[])
    soonmi = User(username='soon-mi',
                  # email='soonmi@aa.io',
                  password="password", likes=[])
    alissa = User(username='alissa',
                  # email='alissa@aa.io',
                  password="password", likes=[])

    db.session.add(demo)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)
    db.session.commit()


with app.app_context():
    for song in chartList:
        song_one = Song(title=song["title"], artist=song["artist"],
                        url=song["url"], cover=song["cover"], on_chart=True)
        db.session.add(song_one)
    db.session.commit()
