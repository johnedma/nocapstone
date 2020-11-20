import React, { useState, useContext } from 'react';
import AuthContext from '../auth'


const SignUp = props => {
    // const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('')
    // const token = useSelector(state => state.authentication.token);
    // const dispatch = useDispatch();
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    // const [fullname, setFullname] = useState('');


    const submitForm = e => {
        e.preventDefault();
        // Make the following an IIFE?
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
                // history.push('/users')
            }
        }
        signupUser();
    }

    return (
        <div style={{
            margin: `2em auto`,
            maxWidth: `400px`,
            padding: `2em`,
            background: `linear-gradient(145deg,#55b9f2,#55b9f2)`,
            borderRadius: `50px`,
            boxShadow: `0 5px 15px 10px #489dcf, 0 3px 3px 7px rgba(96,125,139,.51)`,
            border: `9px solid rgba(56,118,154,.11)`

        }}>
            <div className="authForm">
                <form onSubmit={submitForm}>
                    {errors.length ? errors.map(err => <li key={err} >{err}</li>) : ''}
                    <label>Username: </label>
                    <div className="control">
                        {/* <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" /> */}
                        <input
                            className="input"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} name="username" />
                    </div>
                    <label>Password: </label>
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
                    <button type="submit" className='splash-btn'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
