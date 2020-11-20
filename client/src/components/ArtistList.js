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
    { name: "NBA YoungBoy", img: nba, yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/ggyoungboy" },
    { name: "Chance The Rapper", img: chance, yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/chancetherapper" },
    { name: "Drake", img: drake, yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/drake" },
    { name: "Ty Dolla $ign", img: ty, yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/tydollasign", url: "https://www.youtube.com/playlist?list=PLdvYBl_CREudAr71xljU9NXZe3RV3Ofq-", title: "Dolla $ign Playlist" },
    { name: "Post Malone", img: post, yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/PostMalone" },
    { name: "Kevin Gates", img: gates, yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/iamkevingates" },

]

const ArtistList = () => {
    const { setCurrArtist } = useContext(ArtistContext)

    return (
        <div style={{ marginTop: `35px` }}>
            <h1 style={{
                marginBottom: `-1em`,
                padding: `15px 40px`
            }}
            >Trending Artists</h1>

            <div style={{
                display: `flex`,
                flexDirection: `row`,
                overflow: `auto`,
                padding: `16px 0`,
                margin: `12px 0`
            }}>
                {artists.map(artist =>
                    <NavLink to="/artist"
                        onClick={() => setCurrArtist(artist)}
                    >
                        <div style={{
                            borderRadius: `50px`,
                            margin: `1em`,
                            width: `225px`,
                            alignSelf: `center`,
                            boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                            padding: `0.5em`,
                            border: `9px solid rgba(56, 118, 154, 0.11)`
                        }}>
                            <img src={artist.img}
                                style={{
                                    height: `150px`,
                                    overflow: `hidden`,
                                    display: `flex`,
                                    /* height: 60px, */
                                    borderRadius: `25px`,
                                    border: `5px solid springgreen`,
                                    cursor: `pointer`,
                                    width: `-webkit-fill-available`
                                }} />
                            <p style={{
                                textAlign: `center`,
                                textTransform: `lowercase`,
                                fontWeight: `900`,
                                color: `white`,
                                marginBottom: `0px`,
                                marginTop: `3px`,
                                textShadow: `rgb(249, 26, 147) 1px 1px 1px`,
                                WebkitTextStrokeWidth: `thin`
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
