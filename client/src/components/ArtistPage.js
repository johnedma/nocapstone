import React from 'react';
import nba from "../fonts/nbagang.jpg"
// map aout actual page comps layout and review mvp plus splash page
const artist = {
    name: "YoungBoy Never Broke Again", yt: "https://www.youtube.com/channel/UClW4jraMKz6Qj69lJf-tODA", ig: "https://www.instagram.com/neverbrokeagainllc", spotify: "https://open.spotify.com/artist/7wlFDEWiM5OoIAt8RSli8b", twt: "https://twitter.com/ggyoungboy"
}

const ArtistPage = () => {
    return (
        <div>
            {artist.name}
            <img
                style={{
                    width: `auto`,
                    height: `250px`,
                    border: '12px solid #ffffff',
                    borderRadius: '4em',
                    boxShadow: '0px 1px 9px 9px black, 1px 8px 4px 4px black'
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
        </div>
    );
};

export default ArtistPage;
