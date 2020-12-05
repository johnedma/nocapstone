import React, { useEffect, useContext } from 'react';
import NewsContext from '../NewsContext';
// import surfer from "../fonts/surfer.png"


const NuNews = () => {
    const { nuNews, setNuNews } = useContext(NewsContext)
    useEffect(() => {
        (async () => {
            const response = await fetch('/api/nunews/')
            const data = await response.json()
            console.log(data);
            setNuNews(data.articles)
            // setLoading(false)
        })()
    }, [setNuNews])


    return (
        <div style={{
            display: `flex`,
            flexFlow: `column`,
            // alignItems: `center`
        }}>
            {!nuNews && <h1>LOADING</h1>}
            {nuNews.map((item, i) =>

                <div key={i} id={i} style={{ maxWidth: `700px`, padding: `16px` }} >
                    <div key={i} id={i} style={{
                        borderRadius: `50px`,
                        margin: `2em .5em`,
                        alignSelf: `center`,
                        boxShadow: `-20px 20px 60px #489dcf, 20px -20px 60px #62d5ff`,
                        padding: `.5em`,
                        border: `solid 10px #3da5e340`,
                        boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgb(96 125 139 / 51%) 0px 3px 5px 6px`,
                        border: `9px solid rgb(56 118 154 / 11%)`,
                    }}>
                        <a href={item.url} target="_blank" >
                            <div className="chartItem" style={{
                                overflow: `hidden`,
                                display: `flex`,
                                borderRadius: `50px`,
                                border: `solid springgreen 5px`,
                                cursor: `pointer`,


                            }}><img src={item.urlToImage || "https://i.ibb.co/RQQgKt8/surfer.png"} id={i}
                                style={{
                                    alignSelf: `center`,
                                    width: `100%`
                                }}
                                />
                            </div>
                        </a>
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
                                WebkitTextStrokeWidth: `thin`,
                                padding: `1em`
                            }}
                        >{item.title}</p>
                        <div style={{
                            padding: `2em`,
                            boxShadow: `20px 20px 60px #489dcf, -20px -20px 60px #62d5ff`,
                            border: `solid 6px #52585a1a`,
                            margin: `1em`,
                            borderRadius: `50px`,
                            background: `#55b9f3`,
                            boxShadow: `rgb(72, 157, 207) 0px 0px 15px 6px, rgb(98, 213, 255) 0px 0px 0px 8px`,
                            border: `6px solid rgba(82, 88, 90, 0.1)`,
                            background: `rgb(85, 185, 243)`
                        }}>
                            <p style={{
                                fontWeight: `bold`,
                                background: `white`,
                                padding: `1em`,
                                borderRadius: `1em`,
                                border: `inset`
                            }}
                            >{item.content}</p>
                            <div style={{ display: `flex`, justifyContent: `space-between` }}>
                                <a href={item.url} target="_blank"
                                    style={{
                                        color: `deeppink`,
                                        textDecorationColor: `deeppink`,
                                        textShadow: `1px 0 white`,
                                        fontWeight: `700`,
                                    }}>
                                    <p>Full Story via {item.source.name}</p>
                                </a>
                                <p style={{
                                    fontSize: `small`,
                                    alignSelf: `flex-end`
                                }}>
                                    {item.publishedAt.substring(0, item.publishedAt.indexOf("T"))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default NuNews;
