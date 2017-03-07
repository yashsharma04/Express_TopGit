import {createStore , combineReducers,applyMiddleware} from "redux"
import logger from "redux-logger"
import cartReducer from "./reducers/cartReducer.jsx"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { routerReducer } from 'react-router-redux'

export default createStore(
    combineReducers({
        cartReducer,
        routing : routerReducer
    }),
    {},
    applyMiddleware(logger(),thunk,promise())


);