from nwo.models import User, Song
from nwo import app, db
from dotenv import load_dotenv
load_dotenv()


#     song_one = Song(title="What That Speed Bout?!", artist="Nicki Minaj & NBA YoungBoy",
#                     url="https://www.youtube.com/watch?v=BmzFSKGwx54", cover="http://img.youtube.com/vi/BmzFSKGwx54/0.jpg", on_chart=True)
chartList = [{'title': 'Body', 'artist': 'Megan Thee Stallion', 'url': 'https://www.youtube.com/watch?v=7PBYGu4Az8s', 'cover': 'https://img.youtube.com/vi/7PBYGu4Az8s/0.jpg'},
             {'title': 'Life Is Good (feat. Drake)', 'artist': 'Future',
              'url': 'https://www.youtube.com/watch?v=l0U7SxXHkPY', 'cover': 'https://img.youtube.com/vi/l0U7SxXHkPY/0.jpg'},
             {'title': 'Dákiti (Bad Bunny & Jhay Cortez)', 'artist': 'Bad Bunny',
              'url': 'https://www.youtube.com/watch?v=TmKh7lAwnBI', 'cover': 'https://img.youtube.com/vi/TmKh7lAwnBI/0.jpg'},
             {'title': 'HOLIDAY', 'artist': 'Lil Nas X',  'url': 'https://www.youtube.com/watch?v=9vMLTcftlyI',
              'cover': 'https://img.youtube.com/vi/9vMLTcftlyI/0.jpg'},
             {'title': 'All I Want For Christmas Is You', 'artist': 'Mariah Carey',
              'url': 'https://www.youtube.com/watch?v=yXQViqx6GMY', 'cover': 'https://img.youtube.com/vi/yXQViqx6GMY/0.jpg'},
             {'title': 'WAP (feat. Megan Thee Stallion)', 'artist': 'Cardi B',
              'url': 'https://www.youtube.com/watch?v=hsm4poTWjMs', 'cover': 'https://img.youtube.com/vi/hsm4poTWjMs/0.jpg'},
             {'title': 'For The Night (feat. Lil Baby & DaBaby)', 'artist': 'Pop Smoke',
              'url': 'https://www.youtube.com/watch?v=Q9pjm4cNsfc', 'cover': 'https://img.youtube.com/vi/Q9pjm4cNsfc/0.jpg'},
             {'title': 'Said Sum (Remix) (feat. City Girls & DaBaby)', 'artist': 'Moneybagg Yo',
              'url': 'https://www.youtube.com/watch?v=UDRnXJXKX-A', 'cover': 'https://img.youtube.com/vi/UDRnXJXKX-A/0.jpg'},
             {'title': '34+35', 'artist': 'Ariana Grande',
              'url': 'https://www.youtube.com/watch?v=B6_iQvaIjXw', 'cover': 'https://img.youtube.com/vi/B6_iQvaIjXw/0.jpg'},
             {'title': 'Mood (feat. Iann Dior)', 'artist': '24kGoldn',
              'url': 'https://www.youtube.com/watch?v=GrAchTdepsU', 'cover': 'https://img.youtube.com/vi/GrAchTdepsU/0.jpg'},
             {'title': 'Whoopty', 'artist': 'C.J.',
              'url': 'https://www.youtube.com/watch?v=2xWkATdMQms', 'cover': 'https://img.youtube.com/vi/2xWkATdMQms/0.jpg'},
             {'title': 'Therefore I Am', 'artist': 'Billie Eilish', 'url': 'https://www.youtube.com/watch?v=RUQl6YcMalg',
                 'cover': 'https://img.youtube.com/vi/RUQl6YcMalg/0.jpg'},
             {'title': 'Rags2Riches (feat. Lil Baby)', 'artist': 'Rod Wave',
              'url': 'https://www.youtube.com/watch?v=A2mJSG0L9U0', 'cover': 'https://img.youtube.com/vi/A2mJSG0L9U0/0.jpg'},
             {'title': 'Laugh Now Cry Later (feat. Lil Durk)', 'artist': 'Drake',
              'url': 'https://www.youtube.com/watch?v=JFm7YDVlqnI', 'cover': 'https://img.youtube.com/vi/JFm7YDVlqnI/0.jpg'},

             {'title': 'Throat Baby (Go Baby)', 'artist': 'BRS Kash', 'url': 'https://www.youtube.com/watch?v=ushbQmye-To',
              'cover': 'https://img.youtube.com/vi/ushbQmye-To/0.jpg'},
             {'title': 'Broken Love (MO3 & Kevin Gates)', 'artist': 'MO3',
              'url': 'https://www.youtube.com/watch?v=jWQNqlZ47Ec', 'cover': 'https://img.youtube.com/vi/jWQNqlZ47Ec/0.jpg'},
             {"title": "What That Speed Bout?!", "artist": "Nicki Minaj & NBA YoungBoy",
              "url": "https://www.youtube.com/watch?v=BmzFSKGwx54", "cover": "https://img.youtube.com/vi/BmzFSKGwx54/0.jpg"},
             #  {"title": " Life Is Good", "artist": "Future x Drake", "url": "https://www.youtube.com/watch?v=l0U7SxXHkPY",
             #   "cover": "https://img.youtube.com/vi/l0U7SxXHkPY/0.jpg"},
             {"title": " Wishing Well", "artist": "Juice WRLD", "url": "https://www.youtube.com/watch?v=C5i-UnuUKUI",
                 "cover": "https://img.youtube.com/vi/C5i-UnuUKUI/0.jpg"},
             {"title": "Hit Different", "artist": "SZA ft TY Dolla $ign",
              "url": "https://www.youtube.com/watch?v=qJlMkMtK7-8", "cover": "https://img.youtube.com/vi/qJlMkMtK7-8/0.jpg"},
             {"title": "positions", "artist": "Ariana Grande", "url": "https://www.youtube.com/watch?v=tcYodQoapMg",
              "cover": "https://img.youtube.com/vi/tcYodQoapMg/0.jpg"},
             {"title": "Forever After All", "artist": "Luke Combs", "url": "https://www.youtube.com/watch?v=fmbLCMGtEQc",
              "cover": "https://img.youtube.com/vi/fmbLCMGtEQc/0.jpg"},
             {"title": "Golden", "artist": "Harry Styles", "url": "https://www.youtube.com/watch?v=P3cffdsEXXw",
              "cover": "https://img.youtube.com/vi/P3cffdsEXXw/0.jpg"},
             {"title": "Tyler Herro", "artist": "Jack Harlow", "url": "https://www.youtube.com/watch?v=np9Ub1LilKU",
              "cover": "https://img.youtube.com/vi/np9Ub1LilKU/0.jpg"},
             {"title": "SO DONE", "artist": "The Kid Laroi", "url": "https://www.youtube.com/watch?v=yasj3j76SyM",
              "cover": "https://img.youtube.com/vi/yasj3j76SyM/0.jpg"},
             {"title": "BICHOTA", "artist": "Karol G", "url": "https://www.youtube.com/watch?v=QaXhVryxVBk",
              "cover": "https://img.youtube.com/vi/QaXhVryxVBk/0.jpg"},
             {"title": "I CAN'T STOP ME", "artist": "TWICE", "url": "https://www.youtube.com/watch?v=CM4CkVFmTds",
              "cover": "https://img.youtube.com/vi/CM4CkVFmTds/0.jpg"},
             {"title": "Snitch", "artist": "Joyner Lucas", "url": "https://www.youtube.com/watch?v=74HaJcmgUBw",
              "cover": "https://img.youtube.com/vi/74HaJcmgUBw/0.jpg"},
             {"title": "Promiscuous (feat. Timbaland)", "artist": "Nelly Furtado",
              "url": "https://www.youtube.com/watch?v=0J3vgcE5i2o", "cover": "https://img.youtube.com/vi/0J3vgcE5i2o/0.jpg"},
             {"title": "Damage", "artist": "H.E.R.", "url": "https://www.youtube.com/watch?v=PAFAfhod9TU",
              "cover": "https://img.youtube.com/vi/PAFAfhod9TU/0.jpg"},
             {"title": "Hold On", "artist": "Chord Overstreet", "url": "https://www.youtube.com/watch?v=8ofCZObsnOo",
              "cover": "https://img.youtube.com/vi/8ofCZObsnOo/0.jpg"},
             {"title": "La TÃ³xica", "artist": "Farruko", "url": "https://www.youtube.com/watch?v=puugRJxgdt4",
              "cover": "https://img.youtube.com/vi/puugRJxgdt4/0.jpg"},
             {"title": "Sweater Weather", "artist": "The Neighbourhood", "url": "https://www.youtube.com/watch?v=GCdwKhTtNNw",
              "cover": "https://img.youtube.com/vi/GCdwKhTtNNw/0.jpg"},
             {"title": "the story of O.J.", "artist": "YoungBoy Never Broke Again", "url": "https://www.youtube.com/watch?v=B2J3kLJ8PQk", "cover": "https://img.youtube.com/vi/B2J3kLJ8PQk/0.jpg"}]

with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='demo',
                password="password", likes=[
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
