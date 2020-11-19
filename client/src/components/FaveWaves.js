import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../PlayerContext'
import FaveWavesNuWaves from './FaveWavesNuWaves';

const FaveWaves = () => {
    const { likes, setLikes, nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);
    const [noNuWaves, setNoNuWaves] = useState(null)
    const [nuWaves, setNuWaves] = useState(null)

    const updateCurrentSong = (id) => {
        console.log(id);
        console.log(typeof (id))
        let newId = parseInt(id) + 1
        setNextId(newId)
        console.log(nextId);
        likes.length === 0 ? setCurrentSong(chartList[0]) :
            setCurrentSong(likes[id])
        setNext(likes[newId])
        console.log(next);

    }

    const moreWaves = (e) => {
        // console.log(e.target.id);
        let id = e.target.id
        console.log(id);
        (async () => {
            try {
                const res = await fetch(`/api/morewaves/`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    // credentials: 'include',
                    body: JSON.stringify({
                        id
                    })
                });

                if (res.ok) {
                    const data = await res.json()
                    // shuffle(data.followerPosts[0])
                    // setFollowList(data.followerPosts[0].sort(() => Math.random() - 0.5))
                    console.log(data);
                    setNuWaves(data.items)
                    // const chartList = [
                    //     { title: "positions", artist: "Ariana Grande",
                    // url: "https://www.youtube.com/watch?v=tcYodQoapMg", cover: "http://img.youtube.com/vi/tcYodQoapMg/0.jpg" },
                    //     url: `https://www.youtube.com/watch?v=${tcYodQoapMg}`
                    // item.title
                    // item.snippet.publishedAt
                    //                     item.id.videoId
                    //                     item.snippet.thumbnails.high
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }

    return (
        <div>
            <div style={{
                display: "flex",
                // flexFlow: `column`,
                overflow: `auto`,
                textAlign: `-webkit-center`,
                padding: `16px`
            }}>{!(likes) ? <h1>Yo, go like something!</h1> : null}
                {likes.map((item, i) =>
                    <div key={i} id={i} style={{
                        margin: `0 10px`
                    }}>
                        <div style={{
                            borderRadius: `50px`,

                            margin: `1em .5em`,
                            width: `225px`,
                            alignSelf: `center`,
                            boxShadow: `-20px 20px 60px #489dcf, 20px -20px 60px #62d5ff`,
                            padding: `.5em`,
                            border: `solid 10px #3da5e340`,
                            boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgb(96 125 139 / 51%) 0px 3px 5px 6px`,
                            border: `9px solid rgb(56 118 154 / 11%)`
                        }}>
                            <div className="chartItem" style={{
                                overflow: `hidden`,
                                display: `flex`,
                                height: `60px`,
                                borderRadius: `50px`,
                                border: `solid springgreen 5px`,
                                cursor: `pointer`,

                            }}><img src={item.cover} id={i}
                                style={{
                                    // height: `fit-content`,
                                    alignSelf: `center`,
                                    width: `100%`
                                }}
                                onClick={e => updateCurrentSong(e.target.id)}
                                />
                            </div>
                            <p
                                style={{
                                    textAlign: `center`,
                                    textTransform: `uppercase`,
                                    fontWeight: `900`,
                                    color: `white`,
                                    marginBottom: `0`,
                                    // marginTop: `-27px`,
                                    marginTop: `3px`,
                                    textShadow: `1px 1px 1px #f91a93`,
                                    textTransform: `lowercase`,
                                    WebkitTextStrokeWidth: `thin`
                                }}
                            >{item.artist} : {item.title}</p>

                        </div>
                        <div onClick={moreWaves} id={item.artist}
                            style={{ display: `flex`, maxWidth: `225px` }}>
                            <h1 style={{ fontSize: `1em`, cursor: `pointer` }} id={item.artist}>MORE WAVES FROM {item.artist}</h1>
                        </div>

                        {/*---------------- NU WAVES LOGIC FETCH -------------- */}

                    </div>
                )}
            </div>
            {!nuWaves ? null :
                <FaveWavesNuWaves nuWaves={nuWaves} />

            }

        </div>
    )
};

export default FaveWaves;
