import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import Navbar from './components/Navbar';

import UserList from './components/UsersList';
import ReactPlayer from 'react-player'


function App() {
    const chartList = [
        { title: "positions", artist: "Ariana Grande", url: "https://www.youtube.com/watch?v=tcYodQoapMg" },
        { title: "Forever After All", artist: "Luke Combs", url: "https://www.youtube.com/watch?v=fmbLCMGtEQc" },
        { title: "Golden", artist: "Harry Styles", url: "https://www.youtube.com/watch?v=P3cffdsEXXw" },
        { title: "Tyler Herro", artist: "Jack Harlow", url: "https://www.youtube.com/watch?v=np9Ub1LilKU" },
        { title: "SO DONE", artist: "The Kid Laroi", url: "https://www.youtube.com/watch?v=yasj3j76SyM" },
        { title: "BICHOTA", artist: "Karol G", url: "https://www.youtube.com/watch?v=QaXhVryxVBk" },
        { title: "I CAN'T STOP ME", artist: "TWICE", url: "https://www.youtube.com/watch?v=CM4CkVFmTds" },
        { title: "Snitch", artist: "Joyner Lucas", url: "https://www.youtube.com/watch?v=74HaJcmgUBw" },
        { title: "Promiscuous (feat. Timbaland)", artist: "Nelly Furtado", url: "https://www.youtube.com/watch?v=0J3vgcE5i2o" },
        { title: "Damage", artist: "H.E.R.", url: "https://www.youtube.com/watch?v=PAFAfhod9TU" },
        { title: "Hold On", artist: "Chord Overstreet", url: "https://www.youtube.com/watch?v=8ofCZObsnOo" },
        { title: "La TÃ³xica", artist: "Farruko", url: "https://www.youtube.com/watch?v=puugRJxgdt4" },
        { title: "Sweater Weather", artist: "The Neighbourhood", url: "https://www.youtube.com/watch?v=GCdwKhTtNNw" },
        { title: "the story of O.J.", artist: "YoungBoy Never Broke Again", url: "https://www.youtube.com/watch?v=B2J3kLJ8PQk" }]


    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/artists" component={ArtistPage} />
                <Route path="/artists/:artistname" component={ArtistPage} />
                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/">
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    -----------------
                <ReactPlayer
                        url={[
                            'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                            'https://www.youtube.com/watch?v=jNgP6d9HraI'
                        ]}
                    /> React


{/* player custo */}
                    {/* top level needs container to make display flex inline grid behavior */}
                    {/* 2nd level nested div
    width: 50%;
    height: 100%;
    border-radius: 2em;
    box-shadow: 0px 0px 8px 7px #f91a93;
}
*/}
                    {/* <h1>NEW WAVE ORDER</h1> */}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
