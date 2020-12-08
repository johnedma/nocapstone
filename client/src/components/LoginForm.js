import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'
import PlayerContext from '../PlayerContext';

function LoginForm() {
    const [username, setUsername] = useState("demo");
    const [password, setPassword] = useState("password");
    const [errors, setErrors] = useState([]);
    const { fetchWithCSRF, setCurrentUserId, setCurrentUser } = useContext(AuthContext);
    const { setLikes, setChartList } = useContext(PlayerContext)


    let history = useHistory();
    const submitForm = (e) => {
        e.preventDefault();

        async function loginUser() {
            const response = await fetchWithCSRF(`/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                setCurrentUserId(responseData.current_user_id)
                setCurrentUser(responseData.current_user)
                setLikes(responseData.current_user.likes)
                history.push('/')
            }
        }
        loginUser();
    }


    return (
        <div style={{
            margin: `2em auto`,
            maxWidth: `400px`,
            padding: `12px 24px`,
            background: `linear-gradient(145deg,#55b9f2,#55b9f2)`,
            borderRadius: `50px`,
            boxShadow: `0 5px 15px 10px #489dcf, 0 3px 3px 7px rgba(96,125,139,.51)`,
            border: `9px solid rgba(56,118,154,.11)`,
        }}>
            <form onSubmit={submitForm}>
                {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
                <div className="field">
                    <label>Username: </label>
                    <div className="control">
                        <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
                    </div>
                    <label>Password: </label>
                    <div className="control">
                        <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                    </div>
                </div>
                <button className='splash-btn'>Login</button>
            </form>
        </div>
    );
}
export default LoginForm;
