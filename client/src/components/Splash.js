import React from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';


const Splash = () => {
    const signupform = () => {
        return <SignUp />
    }

    return (
        <div style={{
            maxWidth: `750px`,
            margin: `0 auto`,
            textAlign: `center`,
            marginBottom: `-5em`
        }} >
            <div>
                <h1 style={{ fontSize: `3em` }}>Nu Wave Order</h1>
                {/* <div>
                    <h2 style={{ margin: `0` }}>Nu Music</h2>
                    <h2 style={{ margin: `0` }}>Nu News</h2>
                    <h2 style={{ margin: `0` }}>Nu Waves Only..</h2>
                </div> */}
                {/* <div>
                    Keep up with the latest music news from top trending artists
                    Never miss another wave!
            </div> */}
            </div>
            <LoginForm />
            <h2 onClick={() => <SignUp />}
            >
                Join the wave! Create an account.
                </h2>
            {/* <SignUp /> */}
        </div>
    );
};

export default Splash;
