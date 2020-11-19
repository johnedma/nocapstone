import React from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';


const Splash = () => {
    return (
        <div style={{
            maxWidth: `750px`,
            margin: `0 auto`,
            textAlign: `center`
        }} >
            <div>
                <h1 style={{
                    // margin: `22px auto 12px`,
                    // fontSize: `3em`,
                    // height: `20px`,
                    // marginBlockStart: `1em`,
                    // marginBlockEnd: `1em`
                }}>Nu Wave Order</h1>
                <div style={{}}>
                    <h2 style={{ color: `white`, margin: `0` }}>Nu Music</h2>
                    <h2 style={{ color: `white`, margin: `0` }}>Nu News</h2>
                    <h2 style={{ color: `white`, margin: `0` }}>Nu Waves Only..</h2>
                </div>
                {/* <div>
                    Keep up with the latest music news from top trending artists
                    Never miss another wave!
            </div> */}
            </div>
            <LoginForm style={{
                // background: `springgreen`,
                // padding: `2em`,
                // border: `solid deeppink 1px`,
                // borderRadius: `2em`
            }} />
            <h2 style={{
                // color: `#8e8e8e`,
                // fontSize: `17px`,
                // fontWeight: `600`,
                // lineHeight: `20px`,
                // margin: `0 40px 10px`,
                // textAlign: `center`
            }}>Join the wave! Create an account.</h2>
            <SignUp />
        </div>
    );
};

export default Splash;
