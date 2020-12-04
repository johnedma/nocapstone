import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import ArtistContext from "../ArtistContext";


const ArtistPage = () => {
    const { currArtist } = useContext(ArtistContext)
    useEffect(() => {
        if (document.getElementsByClassName("twitter-embed")[0]) {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            document.getElementsByClassName("twitter-embed")[0].appendChild(script);
        } else
            return
    }, []);

    return (
        <>
            {/* {!currArtist ? <h1 style={{ padding: `2em` }}>LOADING FAILED, PLEASE SELECT ARTIST FROM HOME PAGE</h1> : */}
            {!currArtist ? <Redirect to="/" /> :
                <div style={{ textAlign: `center` }}>
                    {/* <div>
                <iframe src="https://open.spotify.com/embed/artist/7wlFDEWiM5OoIAt8RSli8b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div> */}

                    <h1 >{currArtist.name}</h1>
                    <img
                        style={{
                            width: `auto`,
                            height: `300px`,
                            margin: `15px`,
                            border: '12px solid #ffffff',
                            borderRadius: '20px',
                            maxWidth: `-webkit-fill-available`
                        }}
                        src={currArtist.img} />

                    <section className="twitterContainer"
                        style={{
                            maxWidth: `750px`,
                            margin: `0 auto`,
                            boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 3px 7px`,
                            padding: `.5em`,
                            border: `9px solid rgba(56, 118, 154, 0.11)`,
                            marginBottom: `6em`,
                            borderRadius: `0.5em`
                        }}
                    >
                        <div className="twitter-embed">
                            <a target="_blank"
                                className="twitter-timeline"
                                data-theme="dark"
                                data-tweet-limit="10"
                                data-chrome="noheader nofooter noborders"
                                href={currArtist.twt}
                                style={{ textDecoration: `none` }}
                            >
                                <h1>Tweets by {currArtist.name}</h1>
                            </a>
                        </div>
                    </section>
                </div>
            }
        </>
    );

};

export default ArtistPage;
