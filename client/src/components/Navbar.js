import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../auth';
import { ReactComponent as NewsBtn } from '../assets/imgs/surf.svg';
import { ReactComponent as FavesBtn } from '../assets/imgs/surf-board.svg';
import { ReactComponent as LogOutBtn } from '../assets/imgs/peaceout.svg';


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
            <div className="nav-end">
                <NewsBtn
                    style={{
                        cursor: `pointer`,
                        width: `40px`,
                        height: `40px`,
                        alignSelf: `center`,
                        boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                        border: `9px solid rgba(56, 118, 154, 0.11)`,
                        borderRadius: `1em`,
                        margin: `0px 5px`
                    }}
                />
                <FavesBtn
                    style={{
                        cursor: `pointer`,
                        width: `40px`,
                        height: `40px`,
                        alignSelf: `center`,
                        boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                        border: `9px solid rgba(56, 118, 154, 0.11)`,
                        borderRadius: `1em`,
                        margin: `0px 5px`
                    }}
                />
                <LogOutBtn onClick={() => logoutUser()}
                    style={{
                        cursor: `pointer`,
                        width: `40px`,
                        height: `40px`,
                        alignSelf: `center`,
                        boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                        border: `9px solid rgba(56, 118, 154, 0.11)`,
                        borderRadius: `1em`,
                        margin: `0px 5px`
                    }}
                />
                {/* <button onClick={() => logoutUser()}>
                </button> */}
                {/* </LogOutBtn> */}

            </div>
            {/* <li style={{ listStyle: `none` }}><NavLink to="/users">Users</NavLink></li> */}
        </nav>
    );
};

export default Navbar;

// cmd alt up/dwn
