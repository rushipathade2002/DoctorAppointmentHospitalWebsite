import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer as productReducer } from "./reducer.js";
import { thunk } from "redux-thunk";


const root_reducer = combineReducers({
    product: productReducer
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store = legacy_createStore(root_reducer, composeEnhancers(applyMiddleware(thunk)));