import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import Navbar from './components/Navbar';
// import UserList from './components/UsersList';
// import ReactPlayer from 'react-player/lazy'
import Splash from './components/Splash';
import Player from './Player';
// import { Bars } from 'svg-loaders-react'
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import PlayerContext from './PlayerContext';
import AuthContext from './auth'
import { AuthRoute, ProtectedRoute } from './components/Routes';
import ChartList from './components/ChartList';
import FaveWaves from './components/FaveWaves';
import NotFound from './components/NotFound';
import NewsContext from './NewsContext';
import NuNews from './components/NuNews';
import ArtistContext from './ArtistContext';


function App() {
    const [chartList, setChartList] = useState(null)
    const [currentSong, setCurrentSong] = useState(null)
    const [next, setNext] = useState(null)
    const [nextId, setNextId] = useState(1)
    const [likes, setLikes] = useState([])
    const [prev, setPrev] = useState([])
    const [nuWaves, setNuWaves] = useState(null)
    const playerContextValue = {
        chartList,
        setChartList,
        currentSong,
        setCurrentSong,
        prev,
        setPrev,
        next,
        setNext,
        nextId,
        setNextId,
        likes,
        setLikes,
        nuWaves,
        setNuWaves
    }

    //----------------
    const [currArtist, setCurrArtist] = useState(null)
    const artistContextValue = {
        currArtist,
        setCurrArtist
    }


    //----------------
    const [nuNews, setNuNews] = useState([])
    const nuNewsContextValue = {
        nuNews,
        setNuNews
    }


    //----------------
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId,
        currentUser,
        setCurrentUser
    };


    useEffect(() => {
        (async () => {
            const response = await fetch('/api/songs/chartlist')
            const data = await response.json()
            console.log(data)
            setChartList(data.chart_songs)
            setCurrentSong(data.chart_songs[0])
            setNext(data.chart_songs[1])
        })()
    }, [])


    useEffect(() => {
        (async () => {
            const response = await fetch('/restore')
            const data = await response.json()
            const { current_user_id, current_user } = data
            setCurrentUserId(current_user_id)
            setCurrentUser(current_user)
            setLikes(current_user ? current_user.likes : null)
            // setFetchWithCSRF(csrf_token)
            setLoading(false)
        })()
    }, [])


    return (
        <AuthContext.Provider value={authContextValue}>
            <PlayerContext.Provider value={playerContextValue}>
                <NewsContext.Provider value={nuNewsContextValue}>
                    <ArtistContext.Provider value={artistContextValue}>
                        {/* {loading && <h1>...LOADING...</h1>} */}
                        {!loading &&
                            <BrowserRouter>
                                {currentUserId && <Navbar />}
                                <Switch>
                                    <AuthRoute exact path="/login" component={Splash} currentUserId={currentUserId} />
                                    <AuthRoute exact path="/splash" component={Splash} currentUserId={currentUserId} />
                                    <AuthRoute exact path="/signup" component={SignUp} currentUserId={currentUserId} />
                                    <ProtectedRoute exact path="/artist" component={ArtistPage} currentUserId={currentUserId} />
                                    {/* <Route path="/artists/:artistname" component={ArtistPage} /> */}
                                    <ProtectedRoute path="/nunews" exact component={NuNews} currentUserId={currentUserId} />
                                    <ProtectedRoute path="/favewaves" exact component={FaveWaves} currentUserId={currentUserId} />
                                    <ProtectedRoute path="/" exact component={ChartList} currentUserId={currentUserId} />
                                    <Route component={NotFound} />
                                </Switch>
                                {(currentUserId && currentSong) ? <Player /> : null}
                            </BrowserRouter >
                        }
                    </ArtistContext.Provider>
                </NewsContext.Provider>
            </PlayerContext.Provider>
        </AuthContext.Provider>
    );
}


export default App;
