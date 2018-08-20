import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ContentList from "./containers/ContentList/ContentList";
import FormRegistration from "./components/Form/FormRegistration/FormRegistration";
import FormLogin from "./components/Form/FormLogin/FormLogin";
import {AutorizationRouter} from './components/AutorizationRouter/AutorizationRouter';
import {PrivateRouter} from './components/PrivateRouter/PrivateRouter';

export const App = () => {
    return (
        <div className="container">
            <Switch>
                <Route exact path='/registration' component={FormRegistration}/>
                <AutorizationRouter exact path='/login' component={FormLogin}/>
                <PrivateRouter exact path='/' component={ContentList}/>
            </Switch>
        </div>
    );
};
