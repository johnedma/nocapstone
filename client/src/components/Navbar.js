import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" style={{ textDecoration: `none` }}>
                <h1 >Nu WAVE ORDER</h1>
            </NavLink>
            {/* <li><NavLink to="/users" activeclass="active">Users</NavLink></li> */}
        </nav>
    );
};

export default Navbar;
