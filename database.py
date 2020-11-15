from nwo.models import User
from nwo import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    ian = User(username='ian',
               # email='ian@aa.io',
               password="password", likes=[{"title": "positions", "artist": "Ariana Grande", "url": "https://www.youtube.com/watch?v=tcYodQoapMg", "cover": "http://img.youtube.com/vi/tcYodQoapMg/0.jpg"},
                                           {"title": "Forever After All", "artist": "Luke Combs", "url": "https://www.youtube.com/watch?v=fmbLCMGtEQc",
                                            "cover": "http://img.youtube.com/vi/fmbLCMGtEQc/0.jpg"},
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

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)

    db.session.commit()
