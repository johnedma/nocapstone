import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../auth';


const Navbar = () => {
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext)
    const logoutUser = async () => {
        const response = await fetchWithCSRF('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            setCurrentUserId(null)
        }
    }

    return (
        <nav>
            <NavLink to="/" style={{ textDecoration: `none` }}>
                <h1 >Nu WAVE ORDER</h1>
            </NavLink>
            <button onClick={() => logoutUser()}>LOGOUT</button>
            <li style={{ listStyle: `none` }}><NavLink to="/users">Users</NavLink></li>
        </nav>
    );
};

export default Navbar;

// cmd alt up/dwn
