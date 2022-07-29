import {legacy_createStore, applyMiddleware, legacy_createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
const middleware = [thunk];
const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;