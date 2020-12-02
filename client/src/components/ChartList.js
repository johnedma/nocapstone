import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../PlayerContext'
import ArtistList from './ArtistList';



const ChartList = () => {
    const { nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);

    const updateCurrentSong = (id) => {
        // console.log(id);
        // console.log(typeof (id))
        let newId = parseInt(id) + 1
        setNextId(newId)
        // console.log(nextId);
        setCurrentSong(chartList[id])
        setNext(chartList[newId])
        // console.log(next);
    }

    return (
        <>
            <ArtistList />
            <h1 style={{
                padding: `15px 40px`
            }}
            >Trending Music</h1>
            <div style={{
                display: "flex", flexFlow: `wrap`,
                justifyContent: `space-around`,
                margin: `0 12px`
            }}>
                {chartList.map((item, i) =>
                    <div key={i} id={i} style={{
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
                        }}>
                            <img src={item.cover} id={i}
                                style={{
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
                                marginTop: `3px`,
                                textShadow: `1px 1px 1px #f91a93`,
                                textTransform: `lowercase`,
                                WebkitTextStrokeWidth: `thin`
                            }}>
                            {item.artist} : {item.title}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default ChartList;
