import reportWebVitals from './reportWebVitals';
import {adPost, updateNewPostText} from "./Redux/State";
import state from "./Redux/State";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'))
export let renderAllTree = (state) => {

    root.render(
        <React.StrictMode>
            <App
                appState={state}
                adPost={adPost}
                updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>
    );
}


renderAllTree(state)


reportWebVitals();
