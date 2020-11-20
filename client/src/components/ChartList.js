import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../PlayerContext'
import ArtistList from './ArtistList';



const ChartList = () => {
    // const chartList = [
    //     { title: "positions", artist: "Ariana Grande", url: "https://www.youtube.com/watch?v=tcYodQoapMg", cover: "http://img.youtube.com/vi/tcYodQoapMg/0.jpg" },
    //     { title: "Forever After All", artist: "Luke Combs", url: "https://www.youtube.com/watch?v=fmbLCMGtEQc", cover: "http://img.youtube.com/vi/fmbLCMGtEQc/0.jpg" },
    //     { title: "Golden", artist: "Harry Styles", url: "https://www.youtube.com/watch?v=P3cffdsEXXw", cover: "http://img.youtube.com/vi/P3cffdsEXXw/0.jpg" },
    //     { title: "Tyler Herro", artist: "Jack Harlow", url: "https://www.youtube.com/watch?v=np9Ub1LilKU", cover: "http://img.youtube.com/vi/np9Ub1LilKU/0.jpg" },
    //     { title: "SO DONE", artist: "The KPAFAfhod9TU Laroi", url: "https://www.youtube.com/watch?v=yasj3j76SyM", cover: "http://img.youtube.com/vi/yasj3j76SyM/0.jpg" },
    //     { title: "BICHOTA", artist: "Karol G", url: "https://www.youtube.com/watch?v=QaXhVryxVBk", cover: "http://img.youtube.com/vi/QaXhVryxVBk/0.jpg" },
    //     { title: "I CAN'T STOP ME", artist: "TWICE", url: "https://www.youtube.com/watch?v=CM4CkVFmTds", cover: "http://img.youtube.com/vi/CM4CkVFmTds/0.jpg" },
    //     { title: "Snitch", artist: "Joyner Lucas", url: "https://www.youtube.com/watch?v=74HaJcmgUBw", cover: "http://img.youtube.com/vi/74HaJcmgUBw/0.jpg" },
    //     { title: "Promiscuous (feat. Timbaland)", artist: "Nelly Furtado", url: "https://www.youtube.com/watch?v=0J3vgcE5i2o", cover: "http://img.youtube.com/vi/0J3vgcE5i2o/0.jpg" },
    //     { title: "Damage", artist: "H.E.R.", url: "https://www.youtube.com/watch?v=PAFAfhod9TU", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
    //     { title: "Hold On", artist: "Chord Overstreet", url: "https://www.youtube.com/watch?v=8ofCZObsnOo", cover: "http://img.youtube.com/vi/8ofCZObsnOo/0.jpg" },
    //     { title: "La TÃ³xica", artist: "Farruko", url: "https://www.youtube.com/watch?v=puugRJxgdt4", cover: "http://img.youtube.com/vi/puugRJxgdt4/0.jpg" },
    //     { title: "Sweater Weather", artist: "The Neighbourhood", url: "https://www.youtube.com/watch?v=GCdwKhTtNNw", cover: "http://img.youtube.com/vi/GCdwKhTtNNw/0.jpg" },
    //     { title: "the story of O.J.", artist: "YoungBoy Never Broke Again", url: "https://www.youtube.com/watch?v=B2J3kLJ8PQk", cover: "http://img.youtube.com/vi/B2J3kLJ8PQk/0.jpg" }]
    // const [currentSong, setCurrentSong] = useState("https://www.youtube.com/watch?v=0J3vgcE5i2o")
    //    EVERYTIME PAGE CHANGE YOU RAN USESTATE WHICH CAUSED PLAYER STATE TO CHANGE
    const { nextId, setNextId, next, setNext, currentSong, setCurrentSong, chartList } = useContext(PlayerContext);

    const updateCurrentSong = (id) => {
        console.log(id);
        console.log(typeof (id))
        let newId = parseInt(id) + 1
        setNextId(newId)
        console.log(nextId);
        setCurrentSong(chartList[id])
        setNext(chartList[newId])
        console.log(next);

    }

    return (
        <>
            <ArtistList />

            <h1 style={{
                // marginBottom: `-1em`,
                padding: `15px 35px`
            }}
            >Trending Music</h1>
            <div style={{
                display: "flex", flexFlow: `wrap`,
                justifyContent: `space-around`
            }}>
                {chartList.map((item, i) =>
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

                )}
            </div>
        </>
    );
};

export default ChartList;
