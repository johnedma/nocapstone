import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy'
import PlayerContext from './PlayerContext';
import { ReactComponent as FaveBtn } from './assets/imgs/shaka.svg';
// import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Player = () => {
    const { nuWaves, prev, setPrev, likes, setLikes, nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);
    const [play, setPlay] = useState(false)
    const updatePlay = () => !play ? setPlay(true) : setPlay(false)


    const updateLikes = () => {
        if (likes.some(like => like.title === currentSong.title)) {
            let newLikes = likes.filter(like => like.title !== currentSong.title)
            // console.log(newLikes)
            setLikes(newLikes)
            // console.log(likes)
        }
        else {
            setLikes([...likes, currentSong])
        }
    }


    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/likes`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        likes
                    })
                });
                if (res.ok) {
                    return
                    // const data = await res.json()
                    // console.log(data);
                    // console.log(data.likes)
                    // setLikes(data.likes)
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [likes])


    const updateNext = () => {
        //---criteria for FaveWavesNuWave yt fetch res song---
        if (next && next.snippet) {
            prev.push(currentSong)
            setPrev(prev)
            setCurrentSong({
                url: `https://www.youtube.com/watch?v=${next.id.videoId}`,
                title: next.snippet.title,
                cover: next.snippet.thumbnails.high.url
            })
            setNext(nuWaves[nextId + 1])
            let newId = nextId + 1
            setNextId(newId)
        }
        //---chartlist songs---
        else if (next) {
            prev.push(currentSong)
            setPrev(prev)
            setCurrentSong(next)
            setNext(chartList[nextId + 1])
            let newId = nextId + 1
            setNextId(newId)
        }
    }


    const updatePrev = () => {
        if (!prev.length) return null
        let newId = nextId - 1
        setNextId(newId)
        setNext(currentSong)
        let newCurrent = prev[prev.length - 1]
        prev.pop()
        setPrev(prev)
        // console.log(prev);
        // console.log(newCurrent);
        setCurrentSong(newCurrent)
    }


    return (
        <>
            {(currentSong === null) && <h1>LOADING</h1>}
            {/* { !currentSong.artist && <h1>LOADING</h1>} */}
            {chartList &&
                <div className="footer" >

                    <div style={{ display: `flex`, margin: `0 5px` }}>
                        <button
                            onClick={() => updatePrev()}>
                            <i className="far fa-caret-square-left playerbtns"
                                id="player" />
                        </button>
                        {!play &&
                            <button
                                onClick={() => updatePlay()}>
                                <i className="far fa-play-circle playerbtns"
                                    id="player" />
                            </button>
                        }
                        {play &&
                            <button
                                onClick={() => updatePlay()}>
                                <i className="far fa-pause-circle"
                                    id="player" />
                            </button>
                        }
                        <button
                            onClick={() => updateNext()} >
                            <i className="far fa-caret-square-right playerbtns"
                                id="player" />
                        </button>
                    </div>
                    <div style={{
                        width: `inherit`,
                        maxWidth: `360px`,
                        textAlign: `center`
                    }}>
                        {!currentSong && <h1>LOADING</h1>}
                        {currentSong.artist ?
                            <p style={{ fontVariantCaps: `all-small-caps` }}
                            >{currentSong.artist} - {currentSong.title}
                            </p>
                            :
                            <p style={{ fontVariantCaps: `all-small-caps` }}
                            >{currentSong.title || currentSong.snippet.title}
                            </p>
                        }
                    </div>
                    {currentSong.on_chart ?
                        <div>
                            {likes.some(like => like.title === currentSong.title) ?
                                <Popup trigger={
                                    <button
                                        onClick={() => updateLikes()} >
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
                                        onClick={() => updateLikes()}>
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
                        </div>
                        :
                        <button disabled={true} >
                            <FaveBtn
                                id="player"
                                style={{
                                    margin: `0 9px`,
                                    fill: `#607D8B`,
                                    overflow: `visible`,
                                    boxShadow: `0 0 black`,
                                    cursor: `not-allowed`
                                }} />
                        </button>
                    }
                    {/*
                <NavLink to="/" style={{ textDecorationColor: "springgreen", textDecorationSkipInk: `none` }}>
                    <h1>NWO</h1>
                </NavLink> */}
                </div>
            }
            {chartList &&
                <ReactPlayer style={{ display: `none` }}
                    url={currentSong.url}
                    controls={false}
                    playing={play}
                    onEnded={() => updateNext()}
                />
            }
            {/* {console.log(`playing now: ${play}`)} */}
        </>
    );
};

export default Player;
