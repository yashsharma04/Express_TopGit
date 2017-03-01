import {render} from "react-dom"
import React from "react"
import {Provider} from "react-redux"
import App from "./containers/App.jsx"
import store from "./store.jsx"
render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app'))