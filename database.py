from nwo.models import User, Song
from nwo import app, db
from dotenv import load_dotenv
load_dotenv()


#     song_one = Song(title="What That Speed Bout?!", artist="Nicki Minaj & NBA YoungBoy",
#                     url="https://www.youtube.com/watch?v=BmzFSKGwx54", cover="http://img.youtube.com/vi/BmzFSKGwx54/0.jpg", on_chart=True)
chartList = [{'title': 'Life Is Good (feat. Drake)', 'artist': 'Future', 'url': 'https://www.youtube.com/watch?v=l0U7SxXHkPY',
              'cover': 'https://img.youtube.com/vi/l0U7SxXHkPY/0.jpg'},
             {'title': 'Body', 'artist': 'Megan Thee Stallion', 'url': 'https://www.youtube.com/watch?v=7PBYGu4Az8s',
              'cover': 'https://img.youtube.com/vi/7PBYGu4Az8s/0.jpg'},
             {'title': 'On Me', 'artist': 'Lil Baby', 'url': 'https://www.youtube.com/watch?v=ieTnO1Dvt-I',
              'cover': 'https://img.youtube.com/vi/ieTnO1Dvt-I/0.jpg'},
             {'title': 'All I Want For Christmas Is You', 'artist': 'Mariah Carey',
              'url': 'https://www.youtube.com/watch?v=yXQViqx6GMY', 'cover': 'https://img.youtube.com/vi/yXQViqx6GMY/0.jpg'},
             {'title': 'Dákiti', 'artist': 'Bad Bunny', 'url': 'https://www.youtube.com/watch?v=TmKh7lAwnBI',
              'cover': 'https://img.youtube.com/vi/TmKh7lAwnBI/0.jpg'},
             {'title': 'HOLIDAY', 'artist': 'Lil Nas X', 'url': 'https://www.youtube.com/watch?v=9vMLTcftlyI',
              'cover': 'https://img.youtube.com/vi/9vMLTcftlyI/0.jpg'},
             {'title': 'Oh Santa! (feat. Ariana Grande & Jennifer Hudson)', 'artist': 'Mariah Carey',
              'url': 'https://www.youtube.com/watch?v=G2bx3FzgJ6o', 'cover': 'https://img.youtube.com/vi/G2bx3FzgJ6o/0.jpg'},
             {'title': 'WAP (feat. Megan Thee Stallion)', 'artist': 'Cardi B',
              'url': 'https://www.youtube.com/watch?v=hsm4poTWjMs', 'cover': 'https://img.youtube.com/vi/hsm4poTWjMs/0.jpg'},
             {'title': '34+35', 'artist': 'Ariana Grande', 'url': 'https://www.youtube.com/watch?v=B6_iQvaIjXw',
              'cover': 'https://img.youtube.com/vi/B6_iQvaIjXw/0.jpg'},
             {'title': 'Said Sum (Remix) (feat. City Girls & DaBaby)', 'artist': 'Moneybagg Yo',
              'url': 'https://www.youtube.com/watch?v=UDRnXJXKX-A', 'cover': 'https://img.youtube.com/vi/UDRnXJXKX-A/0.jpg'},
             {'title': 'Whoopty', 'artist': 'C.J.', 'url': 'https://www.youtube.com/watch?v=2xWkATdMQms',
              'cover': 'https://img.youtube.com/vi/2xWkATdMQms/0.jpg'},
             {'title': 'Errbody', 'artist': 'Lil Baby', 'url': 'https://www.youtube.com/watch?v=pKtUpBjIl-g',
              'cover': 'https://img.youtube.com/vi/pKtUpBjIl-g/0.jpg'},
             {'title': 'GIRL LIKE ME (Black Eyed Peas & Shakira)', 'artist': 'Black Eyed Peas',
              'url': 'https://www.youtube.com/watch?v=vMLk_T0PPbk', 'cover': 'https://img.youtube.com/vi/vMLk_T0PPbk/0.jpg'},
             {'title': 'BICHOTA', 'artist': 'Karol G', 'url': 'https://www.youtube.com/watch?v=QaXhVryxVBk',
              'cover': 'https://img.youtube.com/vi/QaXhVryxVBk/0.jpg'},
             {'title': 'For The Night (feat. Lil Baby & DaBaby)', 'artist': 'Pop Smoke',
              'url': 'https://www.youtube.com/watch?v=Q9pjm4cNsfc', 'cover': 'https://img.youtube.com/vi/Q9pjm4cNsfc/0.jpg'},
             {'title': 'Took Her To The O', 'artist': 'King Von', 'url': 'https://www.youtube.com/watch?v=hzt31eJTGxo',
              'cover': 'https://img.youtube.com/vi/hzt31eJTGxo/0.jpg'},
             {'title': 'Mood (feat. Iann Dior)', 'artist': '24kGoldn', 'url': 'https://www.youtube.com/watch?v=GrAchTdepsU',
              'cover': 'https://img.youtube.com/vi/GrAchTdepsU/0.jpg'},
             {'title': 'Blinding Lights (Remix) (feat. Rosalía)', 'artist': 'The Weeknd',
              'url': 'https://www.youtube.com/watch?v=4NRXx6U8ABQ', 'cover': 'https://img.youtube.com/vi/4NRXx6U8ABQ/0.jpg'},
             {'title': 'positions', 'artist': 'Ariana Grande', 'url': 'https://www.youtube.com/watch?v=tcYodQoapMg',
              'cover': 'https://img.youtube.com/vi/tcYodQoapMg/0.jpg'},
             {'title': 'ROCKSTAR (feat. Roddy Ricch)', 'artist': 'DaBaby', 'url': 'https://www.youtube.com/watch?v=mxFstYSbBmc',
              'cover': 'https://img.youtube.com/vi/mxFstYSbBmc/0.jpg'},
             {'title': 'Crazy Story', 'artist': 'King Von', 'url': 'https://www.youtube.com/watch?v=g0v7Ow6Epog',
              'cover': 'https://img.youtube.com/vi/g0v7Ow6Epog/0.jpg'},
             {'title': 'Throat Baby (Go Baby)', 'artist': 'KashKash', 'url': 'https://www.youtube.com/watch?v=ushbQmye-To',
              'cover': 'https://img.youtube.com/vi/ushbQmye-To/0.jpg'},
             {'title': 'One Whole Day (feat. Wiz Khalifa)', 'artist': "Dixie D'Amelio",
              'url': 'https://www.youtube.com/watch?v=XNFBE0t0hIM', 'cover': 'https://img.youtube.com/vi/XNFBE0t0hIM/0.jpg'},
             {'title': 'Rags2Riches (feat. Lil Baby)', 'artist': 'Rod Wave',
              'url': 'https://www.youtube.com/watch?v=A2mJSG0L9U0', 'cover': 'https://img.youtube.com/vi/A2mJSG0L9U0/0.jpg'},
             {'title': 'Laugh Now Cry Later (feat. Lil Durk)', 'artist': 'Drake',
              'url': 'https://www.youtube.com/watch?v=JFm7YDVlqnI', 'cover': 'https://img.youtube.com/vi/JFm7YDVlqnI/0.jpg'},
             {'title': 'We Paid (feat. 42 Dugg)', 'artist': 'Lil Baby', 'url': 'https://www.youtube.com/watch?v=GErG9femMQk',
              'cover': 'https://img.youtube.com/vi/GErG9femMQk/0.jpg'},
             {'title': 'Therefore I Am', 'artist': 'Billie Eilish', 'url': 'https://www.youtube.com/watch?v=RUQl6YcMalg',
              'cover': 'https://img.youtube.com/vi/RUQl6YcMalg/0.jpg'},
             {'title': 'Broken Love (MO3 & Kevin Gates)', 'artist': 'MO3', 'url': 'https://www.youtube.com/watch?v=jWQNqlZ47Ec',
              'cover': 'https://img.youtube.com/vi/jWQNqlZ47Ec/0.jpg'},
             {'title': 'How I Been', 'artist': 'YoungBoy Never Broke Again',
              'url': 'https://www.youtube.com/watch?v=ehper8I7NsI', 'cover': 'https://img.youtube.com/vi/ehper8I7NsI/0.jpg'},
             {'title': 'Hawái', 'artist': 'Maluma', 'url': 'https://www.youtube.com/watch?v=pK060iUFWXg',
              'cover': 'https://img.youtube.com/vi/pK060iUFWXg/0.jpg'},
             {'title': 'Mood Swings (feat. Lil Tjay)', 'artist': 'Pop Smoke',
              'url': 'https://www.youtube.com/watch?v=mM8ostx0Ub8', 'cover': 'https://img.youtube.com/vi/mM8ostx0Ub8/0.jpg'},
             {'title': 'WHATS POPPIN (Remix) (feat. DaBaby, Tory Lanez & Lil Wayne)', 'artist': 'Jack Harlow',
              'url': 'https://www.youtube.com/watch?v=HIwAI05Y1fU', 'cover': 'https://img.youtube.com/vi/HIwAI05Y1fU/0.jpg'},
             {'title': 'Wishing Well', 'artist': 'Juice WRLD', 'url': 'https://www.youtube.com/watch?v=C5i-UnuUKUI',
              'cover': 'https://img.youtube.com/vi/C5i-UnuUKUI/0.jpg'},
             {'title': "'Savage Love' (Laxed – Siren Beat)) (BTS, Jason Derulo & Jawsh 685)", 'artist': 'BTS',
              'url': 'https://www.youtube.com/watch?v=qvu4nPMyl3U', 'cover': 'https://img.youtube.com/vi/qvu4nPMyl3U/0.jpg'},
             {'title': 'Cabrón y Vago (El Fantasma & Los Dos Carnales)', 'artist': 'El Fantasma',
              'url': 'https://www.youtube.com/watch?v=PpH0LV7H25k', 'cover': 'https://img.youtube.com/vi/PpH0LV7H25k/0.jpg'},
             {'title': 'Last Christmas', 'artist': 'Wham!', 'url': 'https://www.youtube.com/watch?v=E8gmARGvPlI',
              'cover': 'https://img.youtube.com/vi/E8gmARGvPlI/0.jpg'},
             {'title': 'Dynamite', 'artist': 'BTS', 'url': 'https://www.youtube.com/watch?v=gdZLi9oWNZg',
              'cover': 'https://img.youtube.com/vi/gdZLi9oWNZg/0.jpg'},
             {'title': 'Sweater Weather', 'artist': 'The Neighbourhood',
              'url': 'https://www.youtube.com/watch?v=GCdwKhTtNNw', 'cover': 'https://img.youtube.com/vi/GCdwKhTtNNw/0.jpg'},
             {'title': 'Real Shit (Juice WRLD & Benny Blanco)', 'artist': 'Juice WRLD',
              'url': 'https://www.youtube.com/watch?v=SRvKCJQTSIA', 'cover': 'https://img.youtube.com/vi/SRvKCJQTSIA/0.jpg'},
             {'title': 'Lemonade (feat. Don Toliver, Gunna & NAV)', 'artist': 'Internet Money',
              'url': 'https://www.youtube.com/watch?v=0opZqh_TprM', 'cover': 'https://img.youtube.com/vi/0opZqh_TprM/0.jpg'},
             {'title': 'Train Wreck', 'artist': 'James Arthur', 'url': 'https://www.youtube.com/watch?v=5Su86fIJYaY',
              'cover': 'https://img.youtube.com/vi/5Su86fIJYaY/0.jpg'},
             {'title': 'Dime Cómo Quieres (Christian Nodal & Ángela Aguilar)', 'artist': 'Christian Nodal',
              'url': 'https://www.youtube.com/watch?v=Ge4AKbnr6ME', 'cover': 'https://img.youtube.com/vi/Ge4AKbnr6ME/0.jpg'},
             {'title': 'Pain Away (feat. Lil Durk)', 'artist': 'Meek Mill', 'url': 'https://www.youtube.com/watch?v=E0gmyePNri4',
              'cover': 'https://img.youtube.com/vi/E0gmyePNri4/0.jpg'},
             {'title': 'All These N**gas (feat. Lil Durk)', 'artist': 'King Von',
              'url': 'https://www.youtube.com/watch?v=gB2LmRyfXuk', 'cover': 'https://img.youtube.com/vi/gB2LmRyfXuk/0.jpg'},
             {'title': 'Bih Yah', 'artist': 'Mario Judah', 'url': 'https://www.youtube.com/watch?v=J2m6sfXF6DM',
              'cover': 'https://img.youtube.com/vi/J2m6sfXF6DM/0.jpg'},
             {'title': 'Heather', 'artist': 'Conan Gray', 'url': 'https://www.youtube.com/watch?v=24u3NoPvgMw',
              'cover': 'https://img.youtube.com/vi/24u3NoPvgMw/0.jpg'},
             {'title': 'City Girls (Chris Brown & Young Thug)', 'artist': 'Chris Brown',
              'url': 'https://www.youtube.com/watch?v=_Gcaa7rGKr8', 'cover': 'https://img.youtube.com/vi/_Gcaa7rGKr8/0.jpg'},
             {'title': 'Santa Tell Me', 'artist': 'Ariana Grande', 'url': 'https://www.youtube.com/watch?v=nlR0MkrRklg',
              'cover': 'https://img.youtube.com/vi/nlR0MkrRklg/0.jpg'},
             {'title': 'Something Different', 'artist': 'Lil Wayne', 'url': 'https://www.youtube.com/watch?v=W2WRE5pxZ7A',
              'cover': 'https://img.youtube.com/vi/W2WRE5pxZ7A/0.jpg'},
             {'title': 'Walk Em Down (feat. Roddy Ricch)', 'artist': 'NLE Choppa',
              'url': 'https://www.youtube.com/watch?v=fyIcQ1Xl-rs', 'cover': 'https://img.youtube.com/vi/fyIcQ1Xl-rs/0.jpg'},
             {'title': 'you broke me first', 'artist': 'Tate McRae', 'url': 'https://www.youtube.com/watch?v=AG-erEMhumc',
              'cover': 'https://img.youtube.com/vi/AG-erEMhumc/0.jpg'},
             {'title': 'Hit Different (SZA & Ty Dolla $ign)', 'artist': 'SZA',
              'url': 'https://www.youtube.com/watch?v=qJlMkMtK7-8', 'cover': 'https://img.youtube.com/vi/qJlMkMtK7-8/0.jpg'},
             {'title': 'Around', 'artist': 'YoungBoy Never Broke Again',
              'url': 'https://www.youtube.com/watch?v=3arkYqvD5q4', 'cover': 'https://img.youtube.com/vi/3arkYqvD5q4/0.jpg'},
             {'title': 'Emotionally Scarred', 'artist': 'Lil Baby', 'url': 'https://www.youtube.com/watch?v=iXUPeEuM1CM',
              'cover': 'https://img.youtube.com/vi/iXUPeEuM1CM/0.jpg'},
             {'title': 'Back In Blood (feat. Lil Durk)', 'artist': 'Pooh Shiesty',
              'url': 'https://www.youtube.com/watch?v=RnGLMCOFjFQ', 'cover': 'https://img.youtube.com/vi/RnGLMCOFjFQ/0.jpg'},
             {'title': 'Forever After All', 'artist': 'Luke Combs', 'url': 'https://www.youtube.com/watch?v=VBaNuWi9FiM',
              'cover': 'https://img.youtube.com/vi/VBaNuWi9FiM/0.jpg'},
             {'title': 'Mary, Did You Know?', 'artist': 'Pentatonix', 'url': 'https://www.youtube.com/watch?v=ifCWN5pJGIE',
              'cover': 'https://img.youtube.com/vi/ifCWN5pJGIE/0.jpg'},
             {'title': 'Everybody (Remix) (feat. Boosie Badazz)', 'artist': 'MO3',
              'url': 'https://www.youtube.com/watch?v=VkycpLa4VU8', 'cover': 'https://img.youtube.com/vi/VkycpLa4VU8/0.jpg'},
             {'title': 'Hot N*gga', 'artist': 'Bobby Shmurda', 'url': 'https://www.youtube.com/watch?v=vJwKKKd2ZYE',
              'cover': 'https://img.youtube.com/vi/vJwKKKd2ZYE/0.jpg'},
             {'title': 'Billie Jean', 'artist': 'Michael Jackson', 'url': 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
              'cover': 'https://img.youtube.com/vi/Zi_XLOBDo_Y/0.jpg'},
             {'title': 'Hallelujah', 'artist': 'Pentatonix', 'url': 'https://www.youtube.com/watch?v=LRP8d7hhpoQ',
              'cover': 'https://img.youtube.com/vi/LRP8d7hhpoQ/0.jpg'},
             {'title': 'No Role Modelz', 'artist': 'J. Cole', 'url': 'https://www.youtube.com/watch?v=2RrhwDKw-j4',
              'cover': 'https://img.youtube.com/vi/2RrhwDKw-j4/0.jpg'},
             {'title': 'Love Cycle', 'artist': 'Toosii', 'url': 'https://www.youtube.com/watch?v=a3UMiwfwlNQ',
              'cover': 'https://img.youtube.com/vi/a3UMiwfwlNQ/0.jpg'},
             {'title': 'LA NOCHE DE ANOCHE (Bad Bunny & Rosalía)', 'artist': 'Bad Bunny',
              'url': 'https://www.youtube.com/watch?v=VlFxGiRGO_8', 'cover': 'https://img.youtube.com/vi/VlFxGiRGO_8/0.jpg'},
             {'title': 'More Than My Hometown', 'artist': 'Morgan Wallen',
              'url': 'https://www.youtube.com/watch?v=MS82JAkBkDY', 'cover': 'https://img.youtube.com/vi/MS82JAkBkDY/0.jpg'},
             {'title': 'Whats On Your Mind (feat. Jacquees)', 'artist': 'K Camp',
              'url': 'https://www.youtube.com/watch?v=xGfe2yhu0e0', 'cover': 'https://img.youtube.com/vi/xGfe2yhu0e0/0.jpg'},
             {'title': 'Caramelo (Remix) (Ozuna, Karol G & Myke Towers)', 'artist': 'Ozuna',
              'url': 'https://www.youtube.com/watch?v=KilybZma5vY', 'cover': 'https://img.youtube.com/vi/KilybZma5vY/0.jpg'},
             {'title': 'Martin & Gina', 'artist': 'Polo G', 'url': 'https://www.youtube.com/watch?v=YNyFAro1E5M',
              'cover': 'https://img.youtube.com/vi/YNyFAro1E5M/0.jpg'},
             {'title': 'pov', 'artist': 'Ariana Grande', 'url': 'https://www.youtube.com/watch?v=nQJEp-k-ogs',
              'cover': 'https://img.youtube.com/vi/nQJEp-k-ogs/0.jpg'},
             {'title': 'La Tóxica', 'artist': 'Farruko', 'url': 'https://www.youtube.com/watch?v=puugRJxgdt4',
              'cover': 'https://img.youtube.com/vi/puugRJxgdt4/0.jpg'},
             {'title': 'Dreams', 'artist': 'Fleetwood Mac', 'url': 'https://www.youtube.com/watch?v=Y3ywicffOj4',
              'cover': 'https://img.youtube.com/vi/Y3ywicffOj4/0.jpg'},
             {'title': "Rockin' Around The Christmas Tree", 'artist': 'Brenda Lee',
              'url': 'https://www.youtube.com/watch?v=qAbRtgo7sVo', 'cover': 'https://img.youtube.com/vi/qAbRtgo7sVo/0.jpg'},
             {'title': 'Letter From Houston', 'artist': 'Rod Wave', 'url': 'https://www.youtube.com/watch?v=CiCT7NCP6BY',
              'cover': 'https://img.youtube.com/vi/CiCT7NCP6BY/0.jpg'},
             {'title': 'POPSTAR (feat. Drake)', 'artist': 'DJ Khaled', 'url': 'https://www.youtube.com/watch?v=3CxtK7-XtE0',
              'cover': 'https://img.youtube.com/vi/3CxtK7-XtE0/0.jpg'},
             {'title': 'Crazy Story, Pt. 3', 'artist': 'King Von', 'url': 'https://www.youtube.com/watch?v=YpxzPXaYyM4',
              'cover': 'https://img.youtube.com/vi/YpxzPXaYyM4/0.jpg'},
             {'title': 'Reminds Me Of You (Juice WRLD & The Kid Laroi)', 'artist': 'Juice WRLD',
              'url': 'https://www.youtube.com/watch?v=SMEZtIATpkQ', 'cover': 'https://img.youtube.com/vi/SMEZtIATpkQ/0.jpg'},
             {'title': 'Life Goes On', 'artist': 'BTS', 'url': 'https://www.youtube.com/watch?v=-5q5mZbe3V8',
              'cover': 'https://img.youtube.com/vi/-5q5mZbe3V8/0.jpg'},
             {'title': 'That’s It (Lil Uzi Vert & Future)', 'artist': 'Lil Uzi Vert',
              'url': 'https://www.youtube.com/watch?v=PmQsZNery80', 'cover': 'https://img.youtube.com/vi/PmQsZNery80/0.jpg'},
             {'title': 'WITHOUT YOU', 'artist': 'The Kid Laroi', 'url': 'https://www.youtube.com/watch?v=fyosJBL78AU',
              'cover': 'https://img.youtube.com/vi/fyosJBL78AU/0.jpg'},
             {'title': 'I Hope', 'artist': 'Gabby Barrett', 'url': 'https://www.youtube.com/watch?v=qcCH6JpcK5w',
              'cover': 'https://img.youtube.com/vi/qcCH6JpcK5w/0.jpg'},
             {'title': 'Jingle Bell Rock', 'artist': 'Bobby Helms', 'url': 'https://www.youtube.com/watch?v=Z0ajuTaHBtM',
              'cover': 'https://img.youtube.com/vi/Z0ajuTaHBtM/0.jpg'},
             {'title': 'Kacey talk', 'artist': 'YoungBoy Never Broke Again',
              'url': 'https://www.youtube.com/watch?v=0C80BSgjb8M', 'cover': 'https://img.youtube.com/vi/0C80BSgjb8M/0.jpg'},
             {'title': 'Como La Flor (Selena & Los Dinos)', 'artist': 'Selena',
              'url': 'https://www.youtube.com/watch?v=JsUt2jsLM1k', 'cover': 'https://img.youtube.com/vi/JsUt2jsLM1k/0.jpg'},
             {'title': 'Lonely (Justin Bieber & Benny Blanco)', 'artist': 'Justin Bieber',
              'url': 'https://www.youtube.com/watch?v=xQOO2xGQ1Pc', 'cover': 'https://img.youtube.com/vi/xQOO2xGQ1Pc/0.jpg'},
             {'title': 'Monster (Shawn Mendes & Justin Bieber)', 'artist': 'Shawn Mendes',
              'url': 'https://www.youtube.com/watch?v=MPbUaIZAaeA', 'cover': 'https://img.youtube.com/vi/MPbUaIZAaeA/0.jpg'},
             {'title': 'Bang!', 'artist': 'AJR', 'url': 'https://www.youtube.com/watch?v=4THFRpw68oQ',
              'cover': 'https://img.youtube.com/vi/4THFRpw68oQ/0.jpg'},
             {'title': 'Holy (feat. Chance The Rapper)', 'artist': 'Justin Bieber',
              'url': 'https://www.youtube.com/watch?v=pvPsJFRGleA', 'cover': 'https://img.youtube.com/vi/pvPsJFRGleA/0.jpg'},
             {'title': 'Daisy', 'artist': 'Ashnikko', 'url': 'https://www.youtube.com/watch?v=6i01tOMgBDU',
              'cover': 'https://img.youtube.com/vi/6i01tOMgBDU/0.jpg'},
             {'title': 'PRACTICE', 'artist': 'DaBaby', 'url': 'https://www.youtube.com/watch?v=1YzXZN37stw',
              'cover': 'https://img.youtube.com/vi/1YzXZN37stw/0.jpg'},
             {'title': 'Rudolph the Red-Nosed Reindeer (feat. The Pinafores)', 'artist': 'Gene Autry',
              'url': 'https://www.youtube.com/watch?v=-1xAi_Q6a8g', 'cover': 'https://img.youtube.com/vi/-1xAi_Q6a8g/0.jpg'},
             {'title': 'Save Me', 'artist': 'JellyRoll', 'url': 'https://www.youtube.com/watch?v=FxFNprPOdss',
              'cover': 'https://img.youtube.com/vi/FxFNprPOdss/0.jpg'},
             {'title': 'Canceled', 'artist': 'Larray', 'url': 'https://www.youtube.com/watch?v=M06ju3qJqA4',
              'cover': 'https://img.youtube.com/vi/M06ju3qJqA4/0.jpg'},
             {'title': 'Cover Me Up', 'artist': 'Morgan Wallen', 'url': 'https://www.youtube.com/watch?v=KEnFCa-5p9E',
              'cover': 'https://img.youtube.com/vi/KEnFCa-5p9E/0.jpg'},
             {'title': "Hittin' (Remix) (feat. Moneybagg Yo & Foogiano)", 'artist': 'Money Mu',
              'url': 'https://www.youtube.com/watch?v=j7tHktqr_sA', 'cover': 'https://img.youtube.com/vi/j7tHktqr_sA/0.jpg'},
             {'title': 'everything i wanted', 'artist': 'Billie Eilish',
              'url': 'https://www.youtube.com/watch?v=EgBJmlPo8Xw', 'cover': 'https://img.youtube.com/vi/EgBJmlPo8Xw/0.jpg'},
             {'title': 'Be Like That (feat. Swae Lee & Khalid)', 'artist': 'Kane Brown',
              'url': 'https://www.youtube.com/watch?v=GEAy7eXb2lo', 'cover': 'https://img.youtube.com/vi/GEAy7eXb2lo/0.jpg'},
             {'title': 'Blood // Water', 'artist': 'grandson', 'url': 'https://www.youtube.com/watch?v=tjIwXKPGf80',
              'cover': 'https://img.youtube.com/vi/tjIwXKPGf80/0.jpg'},
             {'title': 'Underneath the Tree', 'artist': 'Kelly Clarkson',
              'url': 'https://www.youtube.com/watch?v=EM2Fnp_qnE8', 'cover': 'https://img.youtube.com/vi/EM2Fnp_qnE8/0.jpg'},
             {'title': 'Walk (feat. Lil Baby & 42 Dugg)', 'artist': 'Rylo Rodriguez',
              'url': 'https://www.youtube.com/watch?v=Q9VesBHp5PU', 'cover': 'https://img.youtube.com/vi/Q9VesBHp5PU/0.jpg'},
             {'title': 'Never Gonna Give You Up', 'artist': 'Rick Astley',
              'url': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'cover': 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg'}]

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
