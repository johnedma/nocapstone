import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'
import PlayerContext from '../PlayerContext';

function LoginForm(props) {
    const [username, setUsername] = useState("jetty");
    const [password, setPassword] = useState("password");
    let history = useHistory();

    const [errors, setErrors] = useState([]);
    const { fetchWithCSRF, setCurrentUserId, setCurrentUser } = useContext(AuthContext);
    const { setLikes } = useContext(PlayerContext)
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
                // history.push('/users')
                history.push('/')
            }
        }
        loginUser();
    }
    return (
        <div style={{
            borderRadius: `50px`,
            background: `#55b9f3`,
            boxShadow: `20px 20px 60px #489dcf,-20px -20px 60px #62d5ff`,
            margin: `2em auto`,
            maxWidth: `400px`,
            padding: `2em`
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
                <button>Login</button>
            </form>
        </div>
    );
}
export default LoginForm;
