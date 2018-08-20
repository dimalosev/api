import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const AutorizationRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps =>
            rest.authentication ?
                <Redirect to="/"/> :
                <Component {...matchProps}/>
        }/>
    )
};