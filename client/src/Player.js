import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy'
import PlayerContext from './PlayerContext';
import { ReactComponent as FaveBtn } from './assets/imgs/shaka.svg';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Player = () => {
    // const [currentSong, setCurrentSong] = useState("https://www.youtube.com/watch?v=0J3vgcE5i2o")
    // const [currentSong, setCurrentSong] = useState(currentSong)
    // let nextSong = chartList[chartList.indexOf(currentSong) + 1]
    // console.log(nextSong);
    const { prev, setPrev, likes, setLikes, nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);

    const [play, setPlay] = useState(false)
    const updatePlay = () => !play ? setPlay(true) : setPlay(false)

    // const [likes, setLikes] = useState([])
    const updateLikes = () => {
        let index = likes.indexOf(currentSong)
        // console.log(index);
        // console.log(typeof (id))
        // console.log(likes)
        // console.log(currentSong.title);
        // console.log(likes.includes(currentSong.artist));
        // index === -1 ? setLikes([...likes, currentSong]) : setLikes(likes.splice(index, 1))
        // index === 0 ? setLikes([]) :
        // likes.some(like => like.title === currentSong.title) ? setLikes(likes.splice(index, 1)) : setLikes([...likes, currentSong])
        if (likes.some(like => like.title === currentSong.title)) {
            // likes.splice(index, 1)
            setLikes(likes.filter(like => like != currentSong))
        } else setLikes([...likes, currentSong])
        // setLikes(likes.splice(index, 1)) }
        // else setLikes(likes.push(currentSong))
    }

    const updateNext = () => {
        // add logic to loop back to 0 index in chartlist or just stop
        if (next && next.snippet) {
            setPrev(currentSong)
            setCurrentSong(
                {
                    url: `https://www.youtube.com/watch?v=${next.id.videoId}`,
                    title: next.snippet.title,
                    cover: next.snippet.thumbnails.high.url
                })
        } else if (next) {
            setPrev(currentSong)
            setCurrentSong(next)
            setNext(chartList[nextId + 1])
            let newId = nextId + 1
            setNextId(newId)
        }
        return null
    }

    const updatePrev = () => {
        setNext(currentSong)
        setCurrentSong(prev)
    }

    // console.log(play);
    // console.log(likes);
    // console.log(currentSong);
    return (
        <>
            <div className="footer" >

                <div style={{ display: `flex`, margin: `0 5px` }}>
                    <button
                        onClick={() => updatePrev()}
                    >
                        <i className="far fa-caret-square-left playerbtns"
                            id="player"

                        />
                    </button>
                    {!play &&
                        <button
                            onClick={() => updatePlay()}>
                            {/* <i className={(play === false) ? "far fa-play-circle" : "far fa-pause-circle"} */}
                            <i className="far fa-play-circle playerbtns"
                                id="player"

                            />
                        </button>
                    }
                    {play &&
                        <button
                            onClick={() => updatePlay()}>
                            <i className="far fa-pause-circle"
                                id="player"

                            />
                        </button>
                    }
                    <button
                        // onClick={() => setCurrentSong(chartList[chartList.indexOf(currentSong) + 1])}
                        onClick={() => updateNext()}
                    >
                        <i className="far fa-caret-square-right playerbtns"
                            id="player"

                        />
                    </button>
                </div>
                <div style={{
                    width: `inherit`,
                    maxWidth: `360px`,
                    textAlign: `center`
                }}>
                    {currentSong.artist ?
                        <p style={{ fontVariantCaps: `all-small-caps` }}
                        >{currentSong.artist} - {currentSong.title}
                        </p>
                        :
                        <p style={{ fontVariantCaps: `all-small-caps` }}
                        >{currentSong.title}
                        </p>
                    }
                </div>

                {likes.some(like => like.title === currentSong.title) ?
                    <Popup trigger={
                        <button
                            onClick={() => updateLikes()}
                        >
                            <FaveBtn
                                id="player"
                                style={{

                                    backgroundColor: `springgreen`,
                                    margin: `0 9px`
                                }} />
                        </button>
                    } position="top right" on={['hover']}>
                        <div style={{ textAlign: `center` }}>Remove From FaveWaves</div>
                    </Popup>
                    :
                    <Popup trigger={
                        <button
                            onClick={() => updateLikes()}
                        >
                            <FaveBtn
                                id="player"
                                style={{

                                    margin: `0 9px`
                                }} />
                        </button>
                    } position="top right" on={['hover']}>
                        <div style={{ textAlign: `center` }}>Add To FaveWaves</div>
                    </Popup>
                }
                {/*
                <NavLink to="/" style={{ textDecorationColor: "springgreen", textDecorationSkipInk: `none` }}>
                    <h1>NWO</h1>
                </NavLink> */}
            </div>
            <ReactPlayer style={{ display: `none` }}
                url={currentSong.url}
                controls={false}
                playing={play}
                onEnded={() => updateNext()}
            />
            {/* {console.log(`playing now: ${play}`)} */}
        </>
    );
};

export default Player;
