import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ProfileBtn } from '../assets/imgs/surf-board.svg';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" style={{ textDecoration: `none` }}>
                <h1 >Nu WAVE ORDER</h1>
            </NavLink>
            <li style={{ listStyle: `none` }}><NavLink to="/users">Users</NavLink></li>
            <ProfileBtn style={{ width: `45px`, height: `auto` }} />
        </nav>
    );
};

export default Navbar;
