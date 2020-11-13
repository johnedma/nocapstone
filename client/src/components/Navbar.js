import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ProfileBtn } from '../assets/imgs/surf-board.svg';
import { ReactComponent as NewsBtn } from '../assets/imgs/surf.svg';
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
            {/* <li style={{ listStyle: `none` }}><NavLink to="/users">Users</NavLink></li> */}
            <NavLink to="/news" style={{ textDecoration: `none` }}>
                <NewsBtn style={{
                    width: `45px`, height: `auto`,
                    width: `45px`,
                    height: `auto`,
                    /* box-shadow: rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px; */
                    padding: `0.5em`,
                    border: `5px solid rgba(56, 118, 154, 0.11)`,
                    borderRadius: `1em`
                }} />
            </NavLink>
            <ProfileBtn
                onClick={() => logoutUser()}
                style={{
                    width: `45px`, height: `auto`,
                    width: `45px`,
                    height: `auto`,
                    /* box-shadow: rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px; */
                    padding: `0.5em`,
                    border: `5px solid rgba(56, 118, 154, 0.11)`,
                    borderRadius: `1em`

                }} />
            {/* {props.children} */}
        </nav>
    );
};

export default Navbar;
