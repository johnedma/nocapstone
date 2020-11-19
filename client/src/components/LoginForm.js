import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'

function LoginForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const [errors, setErrors] = useState([]);
    const { fetchWithCSRF, setCurrentUserId, setCurrentUser } = useContext(AuthContext);
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
                // history.push('/users')
                history.push('/')
            }
        }
        loginUser();
    }
    return (
        <div className="">
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
