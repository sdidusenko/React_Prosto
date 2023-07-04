import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = ()=> {
    let pathMain = '/profile'
    let pathDialog = '/dialogs/*'
    let pathUsers = '/users'
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar /*friends={props.appState.profilePage.friends}*//>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={pathMain}
                           element={<Profile/>}/>
                    <Route path={pathDialog}
                           element={<DialogsContainer/>}/>
                    <Route path={pathUsers}
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
