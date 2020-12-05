import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../auth'


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('')
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    let history = useHistory();


    const submitForm = e => {
        e.preventDefault();
        // if (password === password2) {
        async function signupUser() {
            const response = await fetchWithCSRF(`/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password,
                    password2
                })
            });

            const responseData = await response.json();
            if (!response.ok) {
                setErrors(responseData.errors);
            } else {
                setCurrentUserId(responseData.current_user_id)
                history.push('/')
            }
        }
        signupUser();
        // } else {
        //     setErrors(["Passwords do not match, please update and resubmit form!"])
        // }
    }

    return (

        <div className="authForm" >
            <form onSubmit={submitForm}
                style={{
                    display: `flex`,
                    flexFlow: `wrap`,
                    justifyContent: `center`
                }}>
                {errors.length ? errors.map(err => <li key={err} >{err}</li>) : ''}
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)} name="username" />
                </div>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} name="password" />
                </div>
                <div className="control">
                    <input
                        className="input"
                        type="password"
                        placeholder="Confirm password"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)} name="password2" />
                </div>
                <div>
                    <button type="submit" className='splash-btn'>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
