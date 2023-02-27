import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'))
let renderAllTree = () => {
    root.render(
        <BrowserRouter>
            <App
                appState={store.getState()}
                dispatch={store.dispatch.bind(store)}
                store={store}
            /></BrowserRouter>
        );
}

renderAllTree(store.getState())

store.subscribe(renderAllTree)
/*store.subscribe(()=>{
    let state= store.getState()
    renderAllTree(state)
})*/




reportWebVitals();
