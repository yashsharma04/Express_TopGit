import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app.jsx';
import {Provider} from 'react-redux'
import store from "./store.jsx"

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>
    , window.document.getElementById('home'));