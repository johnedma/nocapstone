import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import Navbar from './components/Navbar';
import UserList from './components/UsersList';
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



function App() {
    const chartList = [
        { title: "positions", artist: "Ariana Grande", url: "https://www.youtube.com/watch?v=tcYodQoapMg", cover: "http://img.youtube.com/vi/tcYodQoapMg/0.jpg" },
        { title: "Forever After All", artist: "Luke Combs", url: "https://www.youtube.com/watch?v=fmbLCMGtEQc", cover: "http://img.youtube.com/vi/fmbLCMGtEQc/0.jpg" },
        { title: "Golden", artist: "Harry Styles", url: "https://www.youtube.com/watch?v=P3cffdsEXXw", cover: "http://img.youtube.com/vi/P3cffdsEXXw/0.jpg" },
        { title: "Tyler Herro", artist: "Jack Harlow", url: "https://www.youtube.com/watch?v=np9Ub1LilKU", cover: "http://img.youtube.com/vi/np9Ub1LilKU/0.jpg" },
        { title: "SO DONE", artist: "The KPAFAfhod9TU Laroi", url: "https://www.youtube.com/watch?v=yasj3j76SyM", cover: "http://img.youtube.com/vi/yasj3j76SyM/0.jpg" },
        { title: "BICHOTA", artist: "Karol G", url: "https://www.youtube.com/watch?v=QaXhVryxVBk", cover: "http://img.youtube.com/vi/QaXhVryxVBk/0.jpg" },
        { title: "I CAN'T STOP ME", artist: "TWICE", url: "https://www.youtube.com/watch?v=CM4CkVFmTds", cover: "http://img.youtube.com/vi/CM4CkVFmTds/0.jpg" },
        { title: "Snitch", artist: "Joyner Lucas", url: "https://www.youtube.com/watch?v=74HaJcmgUBw", cover: "http://img.youtube.com/vi/74HaJcmgUBw/0.jpg" },
        { title: "Promiscuous (feat. Timbaland)", artist: "Nelly Furtado", url: "https://www.youtube.com/watch?v=0J3vgcE5i2o", cover: "http://img.youtube.com/vi/0J3vgcE5i2o/0.jpg" },
        { title: "Damage", artist: "H.E.R.", url: "https://www.youtube.com/watch?v=PAFAfhod9TU", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Hold On", artist: "Chord Overstreet", url: "https://www.youtube.com/watch?v=8ofCZObsnOo", cover: "http://img.youtube.com/vi/8ofCZObsnOo/0.jpg" },
        { title: "La TÃ³xica", artist: "Farruko", url: "https://www.youtube.com/watch?v=puugRJxgdt4", cover: "http://img.youtube.com/vi/puugRJxgdt4/0.jpg" },
        { title: "Sweater Weather", artist: "The Neighbourhood", url: "https://www.youtube.com/watch?v=GCdwKhTtNNw", cover: "http://img.youtube.com/vi/GCdwKhTtNNw/0.jpg" },
        { title: "the story of O.J.", artist: "YoungBoy Never Broke Again", url: "https://www.youtube.com/watch?v=B2J3kLJ8PQk", cover: "http://img.youtube.com/vi/B2J3kLJ8PQk/0.jpg" }]
    const [currentSong, setCurrentSong] = useState(chartList[0])
    // const [currentPlaylist, setCurrentPlaylist] = useState(chartList)
    // const [next, setNext] = useState(chartList[chartList.indexOf(currentSong) + 1])
    const [next, setNext] = useState(chartList[1])
    const [nextId, setNextId] = useState(1)
    const [likes, setLikes] = useState([])

    const playerContextValue = {
        chartList,
        currentSong,
        setCurrentSong,
        setNext,
        next,
        nextId,
        setNextId,
        likes,
        setLikes

    }

    // auth-----------------

    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // const [postData, setPostData] = useState(null)
    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId,
        currentUser,
        setCurrentUser
    };



    useEffect(() => {
        (async () => {
            const response = await fetch('/restore')
            const data = await response.json()
            const { current_user_id, current_user } = data
            setCurrentUserId(current_user_id)
            setCurrentUser(current_user)
            setLikes(current_user ? current_user.likes : [])
            // setFetchWithCSRF(csrf_token)
            setLoading(false)
        })()

    }, [])


    return (
        <AuthContext.Provider value={authContextValue}>
            <PlayerContext.Provider value={playerContextValue}>
                {loading && <h1>...LOADING...</h1>}
                {!loading &&
                    <BrowserRouter>
                        {currentUserId && <Navbar />}
                        <Switch>
                            <AuthRoute exact path="/login" component={Splash} currentUserId={currentUserId} />
                            <AuthRoute exact path="/splash" component={Splash} currentUserId={currentUserId} />
                            <AuthRoute exact path="/signup" component={Splash} currentUserId={currentUserId} />
                            <Route path="/artists" component={ArtistPage} />
                            {/* <Route path="/artists/:artistname" component={ArtistPage} /> */}
                            {/* <Route path="/users">
                                <UserList />
                            </Route> */}

                            <ProtectedRoute path="/" exact component={ChartList} currentUserId={currentUserId} />


                            {/* ----------------- */}
                            {/* playlist of entire objs and pass in url with name
                    next song use --> array = array.concat(array.splice(0, 1)); */}
                            {/* <ReactPlayer
                        url={[
                            'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                            'https://www.youtube.com/watch?v=jNgP6d9HraI'
                        ]}
                    />  */}


                        </Switch>
                    </BrowserRouter >
                }
                {/* <Player currentSong={currentSong} /> */}
                {currentUserId ?
                    <Player /> : null
                }
            </PlayerContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
