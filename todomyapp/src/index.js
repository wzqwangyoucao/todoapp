import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import List from './list.js'

ReactDOM.render(( 
    <BrowserRouter >
        <Switch>
            <Route  path="/getData"  component={List}></Route>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));