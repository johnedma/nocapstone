import React, { useEffect } from "react";
import nba from "../fonts/nbagang.jpg"
// map aout actual page comps layout and review mvp plus splash page
const artist = {
    name: "YoungBoy Never Broke Again", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", ig: "https://www.instagram.com/neverbrokeagainllc", spotify: "https://open.spotify.com/artist/7wlFDEWiM5OoIAt8RSli8b", twt: "https://twitter.com/ggyoungboy"
}

// google image search
// news api search

const ArtistPage = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
    return (
        <div style={{ textAlign: `center` }}>
            <blockquote class="twitter-tweet">
                <p lang="en" dir="ltr">Black Mirror really outdid themselves this time. Having us experience season 6 instead of watching it on Netflix. Outstanding. 👏🏾</p>&mdash; Jericho (@jerichobetton)
                <a href="https://twitter.com/jerichobetton/status/1300433348054130691?ref_src=twsrc%5Etfw">August 31, 2020</a>
                {/* <a href="https://publish.twitter.com/oembed?
  url=https://twitter.com/Interior/status/463440424141459456"/> */}
            </blockquote>

            <img
                style={{
                    width: `auto`,
                    height: `250px`,
                    border: '12px solid #ffffff',
                    borderRadius: '20px'
                    // borderRadius: '4em',
                    // boxShadow: '0px 1px 9px 9px black, 1px 8px 4px 4px black'
                }}
                src={nba} />
            <br />
            {artist.ig}
            <br />
            {artist.yt}
            <br />
            {artist.spotify}
            <br />
            {artist.twt}
            <div>
                <iframe src="https://open.spotify.com/embed/artist/7wlFDEWiM5OoIAt8RSli8b" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <section className="twitterContainer">
                <div className="twitter-embed">
                    <a
                        className="twitter-timeline"
                        data-theme="dark"
                        data-tweet-limit="5"
                        data-chrome="noheader nofooter noborders"
                        href="https://twitter.com/HeyMarkKop"
                    >
                        Tweets by HeyMarkKop
        </a>
                </div>
            </section>
        </div>
    );
};

export default ArtistPage;
