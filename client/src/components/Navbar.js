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
                            id="res"
                            style={{
                                // cursor: `pointer`,
                                // width: `40px`,
                                // // height: `40px`,
                                // height: `auto`,
                                // alignSelf: `center`,
                                // // boxShadow: `rgb(72, 157, 207) 0px 5px 15px 10px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                                // boxShadow: `rgb(72, 157, 207) 0px 2px 2px 4px, rgba(96, 125, 139, 0.51) 0px 1px 4px 5px`,
                                // border: `9px solid rgba(56, 118, 154, 0.11)`,
                                // borderRadius: `1em`,
                                // margin: `0px 7px`,
                                // maxWidth: `30px`,
                                // width: `-webkit-fill-available`
                            }}
                        />
                    } position="bottom right" on={['hover']}>
                        <div style={{ textAlign: `center` }}>Trending Music News</div>
                    </Popup>
                </NavLink>
                <NavLink to="/favewaves">
                    <Popup trigger={
                        <FavesBtn
                            id="res"
                            style={{
                                // cursor: `pointer`,
                                // width: `40px`,
                                // // height: `40px`,
                                // height: `auto`,
                                // alignSelf: `center`,
                                // // boxShadow: `rgb(72, 157, 207) 0px 5px 15px 7px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                                // boxShadow: `rgb(72, 157, 207) 0px 2px 2px 4px, rgba(96, 125, 139, 0.51) 0px 1px 4px 5px`,
                                // border: `9px solid rgba(56, 118, 154, 0.11)`,
                                // borderRadius: `1em`,
                                // margin: `0px 7px`,
                                // maxWidth: `30px`,
                                // width: `-webkit-fill-available`
                            }}
                        />
                    } position="bottom right" on={['hover']}>
                        <div style={{ textAlign: `center` }}>FaveWaves</div>
                    </Popup>
                </NavLink>
                <Popup trigger={
                    <LogOutBtn onClick={() => logoutUser()}
                        id="res"
                        style={{
                            // cursor: `pointer`,
                            // // width: `40px`,
                            // // height: `40px`,
                            // height: `auto`,
                            // alignSelf: `center`,
                            // // boxShadow: `rgb(72, 157, 207) 0px 5px 15px 7px, rgba(96, 125, 139, 0.51) 0px 3px 5px 6px`,
                            // boxShadow: `rgb(72, 157, 207) 0px 2px 2px 4px, rgba(96, 125, 139, 0.51) 0px 1px 4px 5px`,
                            // border: `9px solid rgba(56, 118, 154, 0.11)`,
                            // borderRadius: `1em`,
                            // margin: `0px 7px`,
                            // maxWidth: `30px`,
                            // width: `-webkit-fill-available`
                        }}
                    />
                } position="bottom right" on={['hover']}>
                    <div style={{ textAlign: `center` }}>Logout</div>
                </Popup>


            </div>
            {/* <li style={{ listStyle: `none` }}><NavLink to="/users">Users</NavLink></li> */}
        </nav>
    );
};

export default Navbar;

// cmd alt up/dwn
