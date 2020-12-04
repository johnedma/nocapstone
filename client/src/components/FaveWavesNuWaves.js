import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../PlayerContext'

// const FaveWavesNuWaves = ({ nuWaves }) => {
const FaveWavesNuWaves = () => {
    const { nuWaves, setNuWaves, prev, setPrev, likes, setLikes, nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);
    // const [noNuWaves, setNoNuWaves] = useState(null)
    // const [nuWaves, setNuWaves] = useState(null)

    const updateCurrentSong = (id) => {
        // console.log(id);
        // console.log(typeof (id))
        let newId = parseInt(id) + 1
        setNextId(newId)
        // console.log(nextId);
        let item = nuWaves[id];
        nuWaves.length === 0 ? setCurrentSong(likes[0]) :
            setCurrentSong(
                {
                    url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                    title: item.snippet.title,
                    publisted: item.snippet.publishedAt,
                    cover: item.snippet.thumbnails.high.url
                })
        setPrev(nuWaves.slice(0, id))
        setNext(nuWaves[newId])
        // console.log(next);
    }

    return (
        <div className="nuWaves" style={{
            display: `flex`,
            flexFlow: `wrap`,
            justifyContent: `space-around`,
            margin: `0 16px 6em`,
            borderRadius: `50px`,
            background: `#55b9f3`,
            boxShadow: `inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff`
        }}>
            {nuWaves.map((item, i) =>
                <div key={i} id={i} >
                    <div key={i} id={i} style={{
                        borderRadius: `50px`,
                        margin: `2em .5em`,
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
                        }}>
                            <img src={item.snippet.thumbnails.high.url} id={i}
                                onClick={e => updateCurrentSong(e.target.id)}
                                style={{
                                    alignSelf: `center`,
                                    width: `100%`
                                }} />
                        </div>
                        <p style={{
                            textAlign: `center`,
                            textTransform: `uppercase`,
                            fontWeight: `900`,
                            color: `white`,
                            marginBottom: `0`,
                            marginTop: `3px`,
                            textShadow: `1px 1px 1px #f91a93`,
                            textTransform: `lowercase`,
                            WebkitTextStrokeWidth: `thin`
                        }} >
                            {
                                item.snippet.title.substring(0, item.snippet.title.indexOf("[")) ||
                                item.snippet.title
                            }
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaveWavesNuWaves;
