import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ArtistContext from '../ArtistContext';


const artists = [
    { name: "Billie Eilish", img: "https://headtopics.com/images/2019/11/7/mtvnews/billie-eilish-has-a-mullet-and-she-s-growing-that-shit-out-1192454086727290881.webp", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/billieeilish" },
    { name: "NBA YoungBoy", img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F10%2Fnba-youngboy-the-story-of-oj-jay-z-freestyle-tw.jpg?w=960&cbr=1&q=90&fit=max", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/ggyoungboyera" },
    { name: "Megan Thee Stallion", img: "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMDU1MTc5Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY1OTk5MDU1N30.5W4iX1UrOkxqKeBGtDUJHIKSjtd-vyqEIEHcokXfQRI/img.jpg?width=1200&quality=85&coordinates=0%2C105%2C0%2C1978&height=800", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/theestallion" },
    { name: "Drake", img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1-drake-ovo-nike-wireless-festival-1571866670.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/drake" },
    { name: "Ariana Grande", img: "https://ourculturemag.com/wp-content/uploads/2020/10/ariana-grande-e1603612171929.jpeg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/ArianaGrande" },
    { name: "Ty Dolla $ign", img: "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2162/files/2020/10/ty-dolla-sign.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/tydollasign", url: "https://www.youtube.com/playlist?list=PLdvYBl_CREudAr71xljU9NXZe3RV3Ofq-", title: "Dolla $ign Playlist" },
    { name: "Sza", img: "https://d28vr35rno8k21.cloudfront.net/images/eNBWNbdiYm2ADSX0swhtd4S4qWZBmIM_szabanner1.png", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/sza" },
    { name: "Post Malone", img: "https://globalnews.ca/wp-content/uploads/2019/09/saint-tropez-post-malone-2.jpg?quality=85&strip=all", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/PostMalone" },
    { name: "Chance The Rapper", img: "https://hiphop-n-more.com/wp-content/uploads/2019/06/chance-the-rapper-new-album-tracklist.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/chancetherapper" },
    { name: "Karol G", img: "https://tropiladorada.com/wp-content/uploads/2020/01/karol-g-ay-dios-mio-letra-video-referencias-slang-facebook.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/karolg" },
    { name: "Kevin Gates", img: "https://i.ytimg.com/vi/tUlm-i-H7ks/maxresdefault.jpg", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", twt: "https://twitter.com/iamkevingates" },
]


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
                                    // height: `70px`,
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
