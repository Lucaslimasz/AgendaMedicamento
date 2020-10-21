import React from 'react';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/login';
import Manager from './pages/manager';

export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/manager" component={Manager} />
            </Switch>
        </BrowserRouter>
    )
}