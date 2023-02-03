import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {adPost} from "./Redux/State";


export let renderAllTree=(state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App appState={state} adPost={adPost}/>
        </React.StrictMode>
    );
}
