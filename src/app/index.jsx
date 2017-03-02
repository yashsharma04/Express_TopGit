import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app.jsx';
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>
    , document.getElementById('home'));