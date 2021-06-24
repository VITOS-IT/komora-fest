import {combineReducers} from "redux";
import {theaterReducer} from "./theaterReducer";
import {authReducer} from "./authReducer";

export const reducers =  combineReducers({theaterReducer, authReducer
});