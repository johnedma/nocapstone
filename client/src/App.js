import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import Navbar from './components/Navbar';

import UserList from './components/UsersList';
import ReactPlayer from 'react-player/lazy'
import Splash from './components/Splash';


function App() {
    const chartList = [
        { title: "positions", artist: "Ariana Grande", url: "https://www.youtube.com/watch?v=tcYodQoapMg", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Forever After All", artist: "Luke Combs", url: "https://www.youtube.com/watch?v=fmbLCMGtEQc", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Golden", artist: "Harry Styles", url: "https://www.youtube.com/watch?v=P3cffdsEXXw", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Tyler Herro", artist: "Jack Harlow", url: "https://www.youtube.com/watch?v=np9Ub1LilKU", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "SO DONE", artist: "The KPAFAfhod9TU Laroi", url: "https://www.youtube.com/watch?v=yasj3j76SyM", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "BICHOTA", artist: "Karol G", url: "https://www.youtube.com/watch?v=QaXhVryxVBk", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "I CAN'T STOP ME", artist: "TWICE", url: "https://www.youtube.com/watch?v=CM4CkVFmTds", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Snitch", artist: "Joyner Lucas", url: "https://www.youtube.com/watch?v=74HaJcmgUBw", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Promiscuous (feat. Timbaland)", artist: "Nelly Furtado", url: "https://www.youtube.com/watch?v=0J3vgcE5i2o", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Damage", artist: "H.E.R.", url: "https://www.youtube.com/watch?v=PAFAfhod9TU", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Hold On", artist: "Chord Overstreet", url: "https://www.youtube.com/watch?v=8ofCZObsnOo", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "La TÃ³xica", artist: "Farruko", url: "https://www.youtube.com/watch?v=puugRJxgdt4", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "Sweater Weather", artist: "The Neighbourhood", url: "https://www.youtube.com/watch?v=GCdwKhTtNNw", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" },
        { title: "the story of O.J.", artist: "YoungBoy Never Broke Again", url: "https://www.youtube.com/watch?v=B2J3kLJ8PQk", cover: "http://img.youtube.com/vi/PAFAfhod9TU/0.jpg" }]
    const [currentSong, setCurrentSong] = useState('https://www.youtube.com/watch?v=oUFJJNQGwhk')



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
                    {/* <Splash /> */}
                    {chartList.map((item, i) =>
                        <div key={i}><img src={item.cover}
                            onClick={() => setCurrentSong(item.url)}
                        /></div>

                    )}
                    <ReactPlayer url={currentSong} />
                    -----------------
                {/* <ReactPlayer
                        url={[
                            'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                            'https://www.youtube.com/watch?v=jNgP6d9HraI'
                        ]}
                    />  */}


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
