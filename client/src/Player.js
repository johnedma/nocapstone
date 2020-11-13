import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy'
import PlayerContext from './PlayerContext';
import { ReactComponent as FaveBtn } from './assets/imgs/cool.svg';

// const Player = ({ chartList, currentSong, setCurrentSong }) => {
const Player = () => {
    // const [currentSong, setCurrentSong] = useState("https://www.youtube.com/watch?v=0J3vgcE5i2o")
    // const [currentSong, setCurrentSong] = useState(currentSong)
    // let nextSong = chartList[chartList.indexOf(currentSong) + 1]
    // console.log(nextSong);
    const { nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);

    const [play, setPlay] = useState(false)
    const updatePlay = () => !play ? setPlay(true) : setPlay(false)

    // const [next, setNext] = useState(chartList[chartList.indexOf(currentSong) + 1])
    const updateNext = () => {
        setCurrentSong(next)
        setNext(chartList[nextId + 1])
        let newId = nextId + 1
        setNextId(newId)


        // let newSong = chartList.indexOf(currentSong) + 1;
        // console.log(chartList[1]);
        // console.log(newSong);
        // setCurrentSong(chartList[newSong])
        // console.log(currentSong);
        // setNext(chartList[chartList.indexOf(next) + 1])
        // setNext(next)
    }
    // console.log(next);
    // useEffect(() => { }, [currentSong])
    console.log(play);
    return (
        <>
            <div className="footer" >

                <div>
                    <button style={{ background: `none`, border: `none` }}
                    // onClick={() => updateNext()}
                    >
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
                    {play === true ?
                        <button style={{ background: `none`, border: `none` }}
                            onClick={() => updatePlay()}>
                            {/* <i className={(play === false) ? "far fa-play-circle" : "far fa-pause-circle"} */}
                            <i className="far fa-play-circle"
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
                        :
                        <button style={{ background: `none`, border: `none` }}
                            onClick={() => updatePlay()}>
                            <i className="far fa-pause-circle"
                                style={{
                                    fontSize: `2em`,
                                    color: `deeppink`,
                                    cursor: `pointer`,
                                    // border: `solid 3px #9e9e9e3b`,
                                    borderRadius: `1em`,
                                    padding: `3px`,
                                    boxShadow: `-2px 2px 4px 1px #80888cab, 1px 2px 5px 2px #b3ced8ad`
                                }}
                            />
                        </button>
                    }
                    <button style={{ background: `none`, border: `none` }}
                        // onClick={() => setCurrentSong(chartList[chartList.indexOf(currentSong) + 1])}
                        onClick={() => updateNext()}
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
                </div>
                <div>
                    <p>{currentSong.artist} - {currentSong.title}</p>
                </div>
                {/* <p>{currentSong.title}</p> */}
                <a href="/" style={{ textDecorationColor: "springgreen", textDecorationSkipInk: `none` }}>
                    <h1>NWO</h1>
                </a>
                <FaveBtn style={{
                    height: `-webkit-fill-available`,
                    width: `auto`
                }} />
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
