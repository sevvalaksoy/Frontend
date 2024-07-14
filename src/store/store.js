import {applyMiddleware, legacy_createStore as createStore} from "redux";
import { preferences } from "./reducers/prefs";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const myStore = createStore(preferences, applyMiddleware(thunk,logger));