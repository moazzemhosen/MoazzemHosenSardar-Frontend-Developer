import { legacy_createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({AppReducer});

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));    