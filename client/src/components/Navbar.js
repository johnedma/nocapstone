import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul style={{ display: "flex", listStyle: "none" }}>
                <li><NavLink to="/" activeclass="active">
                    <h1>NEW WAVE ORDER</h1>
                </NavLink></li>
                {/* <li><NavLink to="/users" activeclass="active">Users</NavLink></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
