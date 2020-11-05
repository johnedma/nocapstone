import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import Navbar from './components/Navbar';

import UserList from './components/UsersList';
import ReactPlayer from 'react-player'


function App() {

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

                    {/* <h1>NEW WAVE ORDER</h1> */}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
