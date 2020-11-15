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
            <LoginForm />
            <SignUp />
        </div>
    );
};

export default Splash;
