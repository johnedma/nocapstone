import React, { useContext } from 'react';
import nba from "../fonts/nbagang.jpg"
import ty from "../fonts/ty.jpg"
import post from "../fonts/post.jpg"
import chance from "../fonts/chance.jpg"
import drake from "../fonts/drake.jpg"
import gates from "../fonts/gates.jpg"
import { NavLink } from 'react-router-dom';
import ArtistContext from '../ArtistContext';

// map aout actual page comps layout and review mvp plus splash page
const artists = [
    { name: "NBA YoungBoy", img: "https://i.ibb.co/QdFV5qZ/nbagang.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/ggyoungboyera" },
    { name: "Chance The Rapper", img: "https://i.ibb.co/DQ5j93p/chance.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/chancetherapper" },
    { name: "Drake", img: "https://i.ibb.co/PTWP5mh/drake.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/drake" },
    { name: "Ty Dolla $ign", img: "https://i.ibb.co/J2xhvR9/ty.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/tydollasign", url: "https://www.youtube.com/playlist?list=PLdvYBl_CREudAr71xljU9NXZe3RV3Ofq-", title: "Dolla $ign Playlist" },
    { name: "Post Malone", img: "https://i.ibb.co/b6SbKx6/post.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/PostMalone" },
    { name: "Kevin Gates", img: "https://i.ibb.co/n0DJMhX/gates.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/iamkevingates" },

]
{/* <a href="https://ibb.co/TTH3MzQ"><img src="https://i.ibb.co/n0DJMhX/gates.jpg" alt="gates" border="0"></a>
<a href="https://ibb.co/6BRSdp2"><img src="https://i.ibb.co/QdFV5qZ/nbagang.jpg" alt="nbagang" border="0"></a>
<a href="https://ibb.co/XtSG7m8"><img src="https://i.ibb.co/DQ5j93p/chance.jpg" alt="chance" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/PTWP5mh/drake.jpg" alt="drake" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/b6SbKx6/post.jpg" alt="post" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/J2xhvR9/ty.jpg" alt="ty" border="0"></a> */}

const ArtistList = () => {
    const { setCurrArtist } = useContext(ArtistContext)

    return (
        <div >
            <h1 style={{
                padding: `15px 40px 0`
            }}
            >Trending Artists</h1>

            <div style={{
                display: `flex`,
                flexDirection: `row`,
                overflow: `auto`,
                padding: `1em`,
                margin: `12px`
            }}>
                {artists.map((artist, i) =>
                    <NavLink to="/artist" key={i}
                        onClick={() => setCurrArtist(artist)}
                    >
                        <div style={{
                            borderRadius: `5px`,
                            margin: `0 1em`,
                            width: `225px`,
                            alignSelf: `center`,
                            boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                            padding: `0.5em`,
                            border: `9px solid rgba(56, 118, 154, 0.11)`,
                            display: `flex`,
                            alignItems: `center`
                        }}>
                            <img src={artist.img}
                                style={{
                                    height: `100px`,
                                    overflow: `hidden`,
                                    display: `flex`,
                                    borderRadius: `5px`,
                                    border: `5px solid springgreen`,
                                    cursor: `pointer`,
                                    width: `-webkit-fill-available`,
                                    objectFit: `cover`
                                }} />
                            <p style={{
                                textAlign: `center`,
                                textTransform: `lowercase`,
                                fontWeight: `900`,
                                color: `white`,
                                marginBottom: `0px`,
                                marginTop: `3px`,
                                textShadow: `rgb(249, 26, 147) 1px 1px 1px`,
                                WebkitTextStrokeWidth: `thin`,
                                padding: `5px`
                            }}>
                                {artist.name}
                            </p>
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default ArtistList;
