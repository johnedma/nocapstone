import React, { useEffect, useContext } from 'react';
import NewsContext from '../NewsContext';
import surfer from "../fonts/surfer.png"


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
    }, [])


    return (
        <div>
            <div style={{
                display: `flex`,
                flexFlow: `column`,
                alignItems: `center`

            }}>
                {/* <h1>Nu News</h1> */}
                {!nuNews && <h1>LOADING</h1>}
                {nuNews.map((item, i) =>
                    // {item.source.name}
                    // {item.title}
                    // {item.description}
                    // {item.urlToImage}
                    // {item.publishedAt}
                    <div key={i} id={i} style={{ maxWidth: `700px` }} >
                        <div key={i} id={i} style={{
                            borderRadius: `50px`,
                            margin: `2em .5em`,
                            // width: `225px`,
                            alignSelf: `center`,
                            boxShadow: `-20px 20px 60px #489dcf, 20px -20px 60px #62d5ff`,
                            padding: `.5em`,
                            border: `solid 10px #3da5e340`,
                            boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgb(96 125 139 / 51%) 0px 3px 5px 6px`,
                            border: `9px solid rgb(56 118 154 / 11%)`,

                        }}>
                            <div className="chartItem" style={{
                                overflow: `hidden`,
                                display: `flex`,
                                // height: `60px`,
                                borderRadius: `50px`,
                                border: `solid springgreen 5px`,
                                cursor: `pointer`,


                            }}><img src={item.urlToImage || surfer} id={i}
                                style={{
                                    // height: `fit-content`,
                                    alignSelf: `center`,
                                    width: `100%`
                                }}
                                // onClick={e => updateCurrentSong(e.target.id)}
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
                                    WebkitTextStrokeWidth: `thin`,
                                    padding: `1em`
                                }}
                            >{item.title}</p>
                            <div style={{
                                padding: `2em`,
                                boxShadow: `20px 20px 60px #489dcf, -20px -20px 60px #62d5ff`,
                                // padding: `1em`,
                                border: `solid 6px #52585a1a`,
                                margin: `1em`,
                                borderRadius: `50px`,
                                background: `#55b9f3`
                            }}>
                                <p style={{
                                    // color: `springgreen`,
                                    // textShadow: `1px 1px black`,
                                    fontWeight: `bold`
                                }}
                                >{item.content}</p>
                                <div style={{ display: `flex`, justifyContent: `space-between` }}>
                                    <a href={item.url}
                                        style={{
                                            color: `deeppink`,
                                            textDecorationColor: `deeppink`,
                                            textShadow: `1px 0 white`,
                                            fontWeight: `700`,
                                        }}><p>Full Story via {item.source.name}</p></a>
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
        </div>

    );
};

export default NuNews;
