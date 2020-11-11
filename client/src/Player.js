import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy'


const Player = ({ currentSong }) => {
    // const [currentSong, setCurrentSong] = useState("https://www.youtube.com/watch?v=0J3vgcE5i2o")

    // useEffect(() => { }, [currentSong])

    return (
        <>
            <div className="footer" >
                <i className="far fa-play-circle"
                    style={{
                        fontSize: `3em`,
                        color: `deeppink`,
                        cursor: `pointer`,
                        border: `solid 3px #9e9e9e3b`,
                        borderRadius: `1em`,
                        padding: `3px`,
                        boxShadow: `-2px 2px 4px 1px #80888cab, 1px 2px 5px 2px #b3ced8ad`
                    }}
                ></i>
            </div>
            <ReactPlayer style={{ display: `none` }}
                url={currentSong ? currentSong : "https://www.youtube.com/watch?v=B2J3kLJ8PQk"}
                controls={false}
                // light={true}
                playing={true}
            />
        </>
    );
};

export default Player;
