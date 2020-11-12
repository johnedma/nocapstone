import React, { useState, useContext } from 'react';
import AuthContext from '../auth'


const SignUp = props => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('')
    // const token = useSelector(state => state.authentication.token);
    // const dispatch = useDispatch();
    const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    const [fullname, setFullname] = useState('');


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
                    email,
                    username,
                    fullname,
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
        <div className="authContain">
            <div className="authForm">
                <div className="authFormDiv">
                    <h1 style={{
                        margin: `22px auto 12px`,
                        fontSize: `3em`,
                        height: `20px`,
                        marginBlockStart: `1em`,
                        marginBlockEnd: `1em`
                    }}>Petstagram</h1>
                    <h2 style={{
                        color: `#8e8e8e`,
                        fontSize: `17px`,
                        fontWeight: `600`,
                        lineHeight: `20px`,
                        margin: `0 40px 10px`,
                        textAlign: `center`
                    }}>Sign up to see photos and videos from your friends.</h2>
                    <div className="authFormInnerWrap">
                        <form onSubmit={submitForm}>
                            {errors.length ? errors.map(err => <li key={err} >{err}</li>) : ''}
                            <input
                                className="input"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)} name="email" />
                            <input
                                className="input"
                                type="text"
                                placeholder="Name"
                                value={fullname}
                                onChange={e => setFullname(e.target.value)} name="fullname" />
                            <input
                                className="input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)} name="username" />
                            <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} name="password" />
                            <input
                                className="input"
                                type="password"
                                placeholder="Confirm password"
                                value={password2}
                                onChange={e => setPassword2(e.target.value)} name="password2" />

                            <button type="submit" className="button has-background-link has-text-white" style={{
                                height: `2rem`,
                                paddingLeft: `.5em`,
                                paddingRight: `.5em`,
                                margin: `8px 40px`,
                                fontWeight: `600`

                            }}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
