import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";



let reducers= combineReducers({
    profilePage:profileReducer,
    messagePage:messageReducer,
    sidebar:sidebarReducer
    }

)

let store =createStore(reducers)
export default store