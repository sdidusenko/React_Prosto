import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";


const App = (props) => {
    let pathMain = '/profile'
    let pathDialog = '/dialogs/*'

    return (
        /*<BrowserRouter>*/
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.appState.profilePage.friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={pathMain}
                        element={<Profile
                            profilePage={props.appState.profilePage}

                            dispatch={props.dispatch}

                    />}/>
                    <Route path={pathDialog}
                        element={<Dialogs
                            dialogsData={props.appState.messagePage.dialogsData}
                            messagesData={props.appState.messagePage.messagesData}
                            newMessageText={props.appState.messagePage.newMessage}

                            dispatch={props.dispatch}

                        />}/>
                </Routes>
            </div>
        </div>
        /*</BrowserRouter>*/
    );
}


export default App;
