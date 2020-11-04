import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';
import Navbar from './components/Navbar';

import UserList from './components/UsersList';


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
                    {/* <h1>NEW WAVE ORDER</h1> */}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
