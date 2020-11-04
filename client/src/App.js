import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ArtistPage from './components/ArtistPage';

import UserList from './components/UsersList';


function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/artists" component={ArtistPage} />
                <Route path="/artists/:artistname" component={ArtistPage} />
                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/">
                    <h1>NEW WAVE ORDER</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
