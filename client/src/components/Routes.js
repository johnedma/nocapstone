import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../auth"


// indy files frome petspj didnt speread props and passed in context directly
export const ProtectedRoute = ({ component: Component, path, currentUserId, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                currentUserId ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export const AuthRoute = ({ component: Component, path, currentUserId, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                currentUserId ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
};
