import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ReactPlayer from 'react-player/lazy'
import PlayerContext from './PlayerContext';
import { ReactComponent as FaveBtn } from './assets/imgs/cool.svg';


// PULL IN USER LIKES IN INITIAL LOAD AND HOLD IN PLAYER CONTEXT


// const Player = ({ chartList, currentSong, setCurrentSong }) => {
const Player = () => {
    // const [currentSong, setCurrentSong] = useState("https://www.youtube.com/watch?v=0J3vgcE5i2o")
    // const [currentSong, setCurrentSong] = useState(currentSong)
    // let nextSong = chartList[chartList.indexOf(currentSong) + 1]
    // console.log(nextSong);
    const { likes, setLikes, nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);

    const [play, setPlay] = useState(false)
    const updatePlay = () => !play ? setPlay(true) : setPlay(false)



    // const [likes, setLikes] = useState([])
    const updateLikes = () => {
        const index = likes.indexOf(currentSong.artist)
        console.log(index);
        // console.log(typeof (id))
        console.log(likes)
        console.log(currentSong.artist);
        console.log(likes.includes(currentSong.artist));
        index === -1 ? setLikes([...likes, currentSong]) : setLikes(likes.splice(index, 1))

        // setLikes(likes.splice(index, 1)) }
        // else setLikes(likes.push(currentSong))

    }
    console.log(likes);
    // const [next, setNext] = useState(chartList[chartList.indexOf(currentSong) + 1])
    const updateNext = () => {
        // add logic to loop back to 0 index in chartlist or just stop
        if (next) {
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

    // const handleLike = e => {
    //     e.preventDefault();

    //     async function removeLike(likes, i) {
    //         const response = await fetch(`api/likes/${likes[i].id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         });
    //         const responseData = await response.json();
    //         if (!response.ok) {
    //             setErrors(responseData.errors);
    //         } else {
    //             console.log(responseData)
    //             likes.splice(i, 1)
    //             console.log(likes)
    //             like_count--
    //             willRerender()
    //         }
    //     }


    //     async function addLike() {
    //         const response = await fetch(`/api/likes/${currentUserId}/${postId}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         });
    //         const responseData = await response.json();
    //         if (!response.ok) {
    //             setErrors(responseData.errors);
    //         } else {
    //             let { data } = responseData
    //             console.log(data)
    //             likes.push(data)
    //             like_count++
    //             willRerender()
    //         }
    //     }
    //     for (let i = 0; i < likes.length; i++) {
    //         if (likes[i].user_id === currentUserId) {
    //             if (likes.includes(currentSong)) () => removeLike(likes, i);
    //             // return "done"
    //         }
    //     }



    //     addLike()
    // }

    // console.log(next);
    // useEffect(() => { }, [currentSong])
    console.log(play);
    console.log(likes);
    console.log(currentSong);
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
                    {play === false ?
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
                    <p style={{ fontVariantCaps: `all-small-caps` }}
                    >{currentSong.artist} - {currentSong.title}</p>
                </div>
                {/* <p>{currentSong.title}</p> */}
                <a href="/" style={{ textDecorationColor: "springgreen", textDecorationSkipInk: `none` }}>
                    <h1>NWO</h1>
                </a>
                {likes.includes(currentSong) === true ?
                    <button
                        onClick={() => updateLikes()}
                        style={{
                            border: `none`,
                            backgroundColor: `springgreen`
                        }}>
                        <FaveBtn style={{
                            height: `-webkit-fill-available`,
                            width: `auto`
                        }} />
                    </button>
                    :
                    <button
                        onClick={() => updateLikes()}
                        style={{
                            border: `none`,
                            backgroundColor: `white`
                        }}>
                        <FaveBtn style={{
                            height: `-webkit-fill-available`,
                            width: `auto`
                        }} />
                    </button>
                }
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
