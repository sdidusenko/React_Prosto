import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {updateNewPostText} from "./Redux/State";

const App = (props) => {
    let pathMain = '/profile'
    let pathDialog = '/dialogs/*'

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
         <Header />
         <Navbar friends={props.appState.profilePage.friends} />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path={pathMain} element={<Profile
                    updateNewPostText={props.updateNewPostText}
                    profilePage={props.appState.profilePage}
                    adPost ={props.adPost}

                />}/>
                <Route path= {pathDialog} element={<Dialogs dialogsData={props.appState.messagePage.dialogsData} messagesData={props.appState.messagePage.messagesData}/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}



export default App;
