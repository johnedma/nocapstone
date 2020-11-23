import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy'
import PlayerContext from './PlayerContext';
// import { ReactComponent as FaveBtn } from './assets/imgs/cool.svg';
// import { ReactComponent as FaveBtn } from './assets/imgs/wavy.svg';
import { ReactComponent as FaveBtn } from './assets/imgs/shaka.svg';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



// PULL IN USER LIKES IN INITIAL LOAD AND HOLD IN PLAYER CONTEXT


// const Player = ({ chartList, currentSong, setCurrentSong }) => {
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
        console.log(index);
        // console.log(typeof (id))
        console.log(likes)
        console.log(currentSong.title);
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
    console.log(likes);
    // const [next, setNext] = useState(chartList[chartList.indexOf(currentSong) + 1])
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


        // let newSong = chartList.indexOf(currentSong) + 1;
        // console.log(chartList[1]);
        // console.log(newSong);
        // setCurrentSong(chartList[newSong])
        // console.log(currentSong);
        // setNext(chartList[chartList.indexOf(next) + 1])
        // setNext(next)
    }

    const updatePrev = () => {
        setNext(currentSong)
        setCurrentSong(prev)
    }

    //     for (let i = 0; i < likes.length; i++) {
    //         if (likes[i].user_id === currentUserId) {
    //             if (likes.includes(currentSong)) () => removeLike(likes, i);
    //             // return "done"

    console.log(play);
    console.log(likes);
    console.log(currentSong);
    return (
        <>
            <div className="footer" >

                <div style={{ display: `flex` }}>
                    <button style={{ background: `none`, border: `none` }}
                        onClick={() => updatePrev()}
                    >
                        <i className="far fa-caret-square-left playerbtns"
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
                    {!play &&
                        <button style={{ background: `none`, border: `none` }}
                            onClick={() => updatePlay()}>
                            {/* <i className={(play === false) ? "far fa-play-circle" : "far fa-pause-circle"} */}
                            <i className="far fa-play-circle playerbtns"
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
                    }
                    {play &&
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
                        <i className="far fa-caret-square-right playerbtns"
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
                {/* <p>{currentSong.title}</p> */}

                {likes.some(like => like.title === currentSong.title) ?
                    <Popup trigger={
                        <button
                            onClick={() => updateLikes()}
                            style={{
                                border: `none`,
                                background: `none`
                            }}>
                            <FaveBtn style={{
                                height: `-webkit-fill-available`,
                                width: `33px`,
                                backgroundColor: `springgreen`,
                                fontSize: `2em`,
                                cursor: `pointer`,
                                borderRadius: `1em`,
                                padding: `5px`,
                                overflow: `visible`,
                                fill: `deeppink`,
                                boxShadow: `rgba(128, 136, 140, 0.67) -2px 2px 4px 1px, rgba(179, 206, 216, 0.68) 1px 2px 5px 2px`,
                            }} />
                        </button>
                    } position="top center" on={['hover', 'focus']}>
                        <div style={{ textAlign: `center` }}>Remove From FaveWaves</div>
                    </Popup>
                    :
                    <Popup trigger={
                        <button
                            onClick={() => updateLikes()}
                            style={{
                                border: `none`,
                                background: `none`
                            }}>
                            <FaveBtn style={{
                                height: `-webkit-fill-available`,
                                width: `33px`,
                                fontSize: `2em`,
                                cursor: `pointer`,
                                borderRadius: `1em`,
                                padding: `5px`,
                                overflow: `visible`,
                                fill: `deeppink`,
                                boxShadow: `rgba(128, 136, 140, 0.67) -2px 2px 4px 1px, rgba(179, 206, 216, 0.68) 1px 2px 5px 2px`,

                            }} />
                        </button>
                    } position="top center" on={['hover', 'focus']}>
                        <div style={{ textAlign: `center` }}>Add To FaveWaves</div>
                    </Popup>
                }

                <NavLink to="/" style={{ textDecorationColor: "springgreen", textDecorationSkipInk: `none` }}>
                    <h1>NWO</h1>
                </NavLink>
            </div>
            <ReactPlayer style={{ display: `none` }}
                // url={currentSong ? currentSong.url : "https://www.youtube.com/watch?v=B2J3kLJ8PQk"}
                url={currentSong.url}
                controls={false}
                // light={true}
                playing={play}
                onEnded={() => updateNext()}
            />
            {console.log(`playing now: ${play}`)}
        </>
    );
};

export default Player;
