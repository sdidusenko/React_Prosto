import React from "react";
import {adNewMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/messageReducer'
import Dialogs from "../Dialogs/Dialogs";


const DialogsContainer = (props) => {
    let state= props.store.getState().messagePage;
    let onSendMessageClick=()=>{
        props.store.dispatch(adNewMessageActionCreator())
    }
    let onNewMessageChange=(mess)=>{
        props.store.dispatch(updateNewMessageActionCreator(mess))
    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    messagePage={state}
        />
    )
}
export default DialogsContainer;
