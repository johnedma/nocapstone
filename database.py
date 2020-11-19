from nwo.models import User
from nwo import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    jetty = User(username='jetty',
                 password="password", likes=[
                     {"title": "SO DONE", "artist": "The KPAFAfhod9TU Laroi", "url": "https://www.youtube.com/watch?v=yasj3j76SyM",
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

    db.session.add(jetty)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)

    db.session.commit()
