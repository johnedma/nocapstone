import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../PlayerContext'

const FaveWavesNuWaves = ({ nuWaves }) => {
    const { likes, setLikes, nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);
    // const [noNuWaves, setNoNuWaves] = useState(null)
    // const [nuWaves, setNuWaves] = useState(null)


    const updateCurrentSong = (id) => {
        console.log(id);
        console.log(typeof (id))
        let newId = parseInt(id) + 1
        setNextId(newId)
        console.log(nextId);
        let item = nuWaves[id];
        nuWaves.length === 0 ? setCurrentSong(likes[0]) :
            setCurrentSong(
                {
                    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    title: item.snippet.title,
                    publisted: item.snippet.publishedAt,
                    cover: item.snippet.thumbnails.high.url
                })
        // item.id.videoId
        setNext(nuWaves[newId])
        console.log(next);

    }


    return (
        <div>
            <div className="nuWaves" style={{
                display: `flex`,
                flexFlow: `wrap`
            }}>
                {nuWaves.map((item, i) =>
                    <div key={i} id={i} >
                        <div key={i} id={i} style={{
                            borderRadius: `50px`,
                            // boxShadow: `20px 20px 60px #489dcf, -20px -20px 60px #62d5ff`,
                            // background: `#46fd7f`,
                            // padding: `1em`,
                            // paddingTop: `.5em`,
                            // margin: `1.5em 1em`,
                            margin: `1em .5em`,
                            // width: `250px`,
                            width: `225px`,
                            alignSelf: `center`,
                            boxShadow: `-20px 20px 60px #489dcf, 20px -20px 60px #62d5ff`,
                            // padding: `1em`,
                            padding: `.5em`,
                            border: `solid 10px #3da5e340`,
                            // border: `solid 7px #3da5e340`,
                            boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgb(96 125 139 / 51%) 0px 3px 5px 6px`,
                            // padding: 1em;
                            border: `9px solid rgb(56 118 154 / 11%)`
                        }}>
                            <div className="chartItem" style={{
                                overflow: `hidden`,
                                // margin: `1em`,
                                display: `flex`,
                                // height: `100px`,
                                height: `60px`,
                                borderRadius: `50px`,
                                // width: `fit-content`,
                                border: `solid springgreen 5px`,
                                // marginBottom: `10px`,
                                cursor: `pointer`,


                            }}><img src={item.snippet.thumbnails.high.url} id={i}
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
                            >{item.snippet.title}</p>
                            {/* <p>{item.snippet.publishedAt}</p> */}

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default FaveWavesNuWaves;
