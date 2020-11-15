import React from 'react';
import splashbg from "../fonts/nuwave.jpg"
import LoginForm from './LoginForm';
import SignUp from './SignUp';


const Splash = () => {
    return (
        <div className="splash" >
            <img src={splashbg}
                style={
                    {
                        height: `-webkit-fill-available`,
                        maxWidth: `-webkit-fill-available`
                    }} />
            <div>
                <h1 style={{ color: `white` }}>Nu Music</h1>
                <h1 style={{ color: `white` }}>Nu News</h1>
                <h1 style={{ color: `white` }}>Nu Waves.. Don't Miss The Wave</h1>
            </div>
            <LoginForm />
            <SignUp />
        </div>
    );
};

export default Splash;
