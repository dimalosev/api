import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRouter = ({component: Component, ...rest}) => (
        <Route {...rest} render={matchProps => {
            if(localStorage.getItem("username")) {
                return <Component {...matchProps}/>
            } else {
                return <Redirect to="/registration"/>
            }
        }}/>
);