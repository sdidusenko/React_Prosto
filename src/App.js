import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
/*import Cat from "./Assets/fashionCat.jpg";
import Frog from "./Assets/frogMegaBossjpg.jpg";
import Man from "./Assets/Men.jpg";*/


const App = (props) => {
    let pathMain = '/profile'
    let pathDialog = '/dialogs/*'
    /*let post = [
        {message: "Hello, I am good", like: 7, img: Cat},
        {message: "It is my first post", like: 77, superlike: 777, img: Frog},
        {message: "HI, YO, Girls", like: 7777, superlike: 77777, img: Man}
    ]*/
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
         <Header />
         <Navbar friends={props.appState.profilePage.friends} />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path={pathMain} element={<Profile post={props.appState.profilePage.post} />}/>
                <Route path= {pathDialog} element={<Dialogs dialogsData={props.appState.messagePage.dialogsData} messagesData={props.appState.messagePage.messagesData}/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
  );
}



export default App;
