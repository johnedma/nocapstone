from nwo.models import User
from nwo import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    ian = User(username='ian', email='ian@aa.io',
               password="password", likes=[]
               )
    javier = User(username='javier', email='javier@aa.io',
                  password="password", likes=["what", "you", "on", "folk"
                                              ])
    dean = User(username='dean', email='dean@aa.io',
                password="password", likes=[])
    angela = User(username='angela', email='angela@aa.io',
                  password="password", likes=[])
    soonmi = User(username='soon-mi', email='soonmi@aa.io',
                  password="password", likes=[])
    alissa = User(username='alissa', email='alissa@aa.io',
                  password="password", likes=[])

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)

    db.session.commit()

# {"title": "La TÃ³xica", "artist": "Farruko", "url": "https://www.youtube.com/watch?v=puugRJxgdt4", "cover": "http://img.youtube.com/vi/puugRJxgdt4/0.jpg"},
#                                            {"title": "Sweater Weather", "artist": "The Neighbourhood",
#                                             "url": "https://www.youtube.com/watch?v=GCdwKhTtNNw", "cover": "http://img.youtube.com/vi/GCdwKhTtNNw/0.jpg"},
#                                            {"title": "the story of O.J.", "artist": "YoungBoy Never Broke Again", "url": "https://www.youtube.com/watch?v=B2J3kLJ8PQk", "cover": "http://img.youtube.com/vi/B2J3kLJ8PQk/0.jpg"}
