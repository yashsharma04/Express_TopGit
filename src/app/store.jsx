import {createStore , combineReducers,applyMiddleware} from "redux"
import logger from "redux-logger"
import math from "./reducers/mathReducer.jsx"
import user from "./reducers/userReducer.jsx"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

export default createStore(
    combineReducers({
        math,
        user
    }),
    {},
    applyMiddleware(logger(),thunk,promise())
);