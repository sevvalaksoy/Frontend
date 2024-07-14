import {legacy_createStore as createStore} from "redux";
import { preferences } from "./reducers/prefs";

export const myStore = createStore(preferences);