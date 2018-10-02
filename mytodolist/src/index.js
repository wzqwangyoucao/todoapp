import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import Mylist from './list.js'
import './index.css'
ReactDOM.render(
    <div>
        <BrowserRouter>
                <Switch>
                    <Route path="/getData" component={Mylist}></Route>
                </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById('root')
);

