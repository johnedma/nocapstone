import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../auth';
import { ReactComponent as NewsBtn } from '../assets/imgs/surf.svg';
import { ReactComponent as FavesBtn } from '../assets/imgs/surf-board.svg';
import { ReactComponent as LogOutBtn } from '../assets/imgs/peaceout.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


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

            {/* <Popup trigger={<button> Trigger</button>} position="bottom center">
                <div>Popup content here !!</div>
            </Popup> */}
            <div className="nav-end" style={{ display: `flex` }}>
                <NavLink to="/nunews">
                    <Popup trigger={
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
                    } position="bottom center" on={['hover', 'focus']}>
                        <div style={{ textAlign: `center` }}>Trending Music News</div>
                    </Popup>
                </NavLink>
                <NavLink to="/favewaves">
                    <Popup trigger={
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
                    } position="bottom center" on={['hover', 'focus']}>
                        <div style={{ textAlign: `center` }}>FaveWaves</div>
                    </Popup>
                </NavLink>
                <Popup trigger={
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
                } position="bottom center" on={['hover', 'focus']}>
                    <div style={{ textAlign: `center` }}>Logout</div>
                </Popup>
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
