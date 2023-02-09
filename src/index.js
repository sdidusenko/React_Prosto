import reportWebVitals from './reportWebVitals';
import store from './Redux/State'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'))
 let renderAllTree = () => {

    root.render(
        /*<React.StrictMode>*/
        <BrowserRouter><App
            appState={store.getState()}

            dispatch={store.dispatch.bind(store)}

        /></BrowserRouter>/*переніс з арр.js
        /*</React.StrictMode>*//* this string we have not in a lesson*/
    );
}

renderAllTree(store.getState())

store.subscribe(renderAllTree)




reportWebVitals();
