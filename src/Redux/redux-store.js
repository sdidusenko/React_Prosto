import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import userReducer from "./user-reduser";

let reducers= combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    sidebar:sidebarReducer,
    usersPage: userReducer
    }
)

let store =createStore(reducers)
export default store