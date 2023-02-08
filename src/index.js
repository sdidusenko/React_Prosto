import reportWebVitals from './reportWebVitals';
import {adNewMessage, adPost, subscribe, updateNewMessage, updateNewPostText} from "./Redux/State";
import state from "./Redux/State";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'))
 let renderAllTree = (state) => {

    root.render(
        /*<React.StrictMode>*/
        <BrowserRouter><App
            appState={state}
            adPost={adPost}
            updateNewPostText={updateNewPostText}
            adNewMessage={adNewMessage}
            updateNewMessage={updateNewMessage}
        /></BrowserRouter>/*переніс з арр.js
        /*</React.StrictMode>*//* this string we have not in a lesson*/
    );
}

renderAllTree(state)

subscribe(renderAllTree)




reportWebVitals();
