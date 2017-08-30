import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
//React-Router
import {Route, BrowserRouter, Switch} from "react-router-dom";

import Home from "./home.js";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
            
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));