import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy'


const Player = ({ currentSong }) => {
    // const [currentSong, setCurrentSong] = useState("https://www.youtube.com/watch?v=0J3vgcE5i2o")
    const [play, setPlay] = useState(false)
    const updatePlay = () => !play ? setPlay(true) : setPlay(false)
    const [next, setNext] = useState(null)
    const updateNext = () =>

        // useEffect(() => { }, [currentSong])
        console.log(play);
    return (
        <>
            <div className="footer" >
                <button style={{ background: `none`, border: `none` }}
                    onClick={() => updateNext()}>
                    <i className="far fa-caret-square-left"
                        style={{
                            fontSize: `2em`,
                            color: `deeppink`,
                            cursor: `pointer`,
                            // border: `solid 2px #9e9e9e3b`,
                            borderRadius: `1em`,
                            padding: `3px`,
                            boxShadow: `-2px 2px 4px 1px #80888cab, 1px 2px 5px 2px #b3ced8ad`
                        }}
                    />
                </button>
                <button style={{ background: `none`, border: `none` }}
                    onClick={() => updatePlay()}>
                    {/* {play === false ? */}
                    <i className={(play === false) ? "far fa-play-circle" : "far fa-pause-circle"}
                        style={{
                            fontSize: `2em`,
                            color: `deeppink`,
                            cursor: `pointer`,
                            // border: `solid 2px #9e9e9e3b`,
                            borderRadius: `1em`,
                            padding: `3px`,
                            boxShadow: `-2px 2px 4px 1px #80888cab, 1px 2px 5px 2px #b3ced8ad`
                        }}
                    />
                    {/* : <i className="far fa-pause-circle"
                            style={{
                                fontSize: `2em`,
                                color: `deeppink`,
                                cursor: `pointer`,
                                border: `solid 3px #9e9e9e3b`,
                                borderRadius: `1em`,
                                padding: `3px`,
                                boxShadow: `-2px 2px 4px 1px #80888cab, 1px 2px 5px 2px #b3ced8ad`
                            }}
                        />} */}
                </button>
                <button style={{ background: `none`, border: `none` }}
                // onClick={() => updateNext()}
                >
                    <i className="far fa-caret-square-right"
                        style={{
                            fontSize: `2em`,
                            color: `deeppink`,
                            cursor: `pointer`,
                            // border: `solid 2px #9e9e9e3b`,
                            borderRadius: `1em`,
                            padding: `3px`,
                            boxShadow: `-2px 2px 4px 1px #80888cab, 1px 2px 5px 2px #b3ced8ad`
                        }}
                    />
                </button>
                <p>{currentSong.artist}</p>
                <p>{currentSong.title}</p>
            </div>
            <ReactPlayer style={{ display: `none` }}
                // url={currentSong ? currentSong.url : "https://www.youtube.com/watch?v=B2J3kLJ8PQk"}
                url={currentSong.url}
                controls={false}
                // light={true}
                playing={play}
            />
            {console.log(`playing now: ${play}`)}
        </>
    );
};

export default Player;
