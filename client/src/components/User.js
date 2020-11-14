import React, { } from 'react';
import { Link } from 'react-router-dom';

function User(props) {
    return (
        <>
            <strong>Username:</strong> {props.user.username}<br />
            <strong>Email:</strong> {props.user.email}<br />

            {/*THIS WORKS {props.user.likes.map((like, i) => <div>{i}: {like}</div>)} */}
            <Link to={{
                pathname: `/users/${props.user.id}/edit`,
                state: {
                    user: props.user
                }
            }}> Edit </Link>
            <hr />
        </>
    );
}
export default User;
