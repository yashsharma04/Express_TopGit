import React from 'react';
import ReactDOM from 'react-dom';
import Home from './app.jsx';
import {Provider} from 'react-redux'
import store from "./store.jsx"
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Checkout from './containers/Checkout.jsx'
import Cart from './containers/Cart.jsx'
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
    <Provider store={store}>
        <div>
        <Router history={history}>
            <Route path="/cart" component={Cart}/>
            <Route path="/" component={Home}/>
            <Route path="/checkout" component={Checkout}/>

        </Router>
        </div>
    </Provider>
    , window.document.getElementById('home'));