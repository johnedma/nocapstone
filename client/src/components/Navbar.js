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
            <div className="nav-end" style={{ display: `flex` }}>
                <NavLink to="/nunews">
                    <Popup trigger={
                        <NewsBtn
                            id="res"
                        />
                    } position="bottom right" on={['hover']}>
                        <div style={{ textAlign: `center` }}>Trending Music News</div>
                    </Popup>
                </NavLink>
                <NavLink to="/favewaves">
                    <Popup trigger={
                        <FavesBtn
                            id="res"
                        />
                    } position="bottom right" on={['hover']}>
                        <div style={{ textAlign: `center` }}>FaveWaves</div>
                    </Popup>
                </NavLink>
                <Popup trigger={
                    <LogOutBtn onClick={() => logoutUser()}
                        id="res"
                    />
                } position="bottom right" on={['hover']}>
                    <div style={{ textAlign: `center` }}>Logout</div>
                </Popup>
            </div>
        </nav>
    );
};

export default Navbar;
