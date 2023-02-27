import s from '../Dialogs/dialogs.module.css'
import MessageData from '../Dialogs/Messages/Messages';
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import React from "react";
import state  from "../../Redux/Store";
import {adNewMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/messageReducer'

const DialogsTwo = (props) => {
    let state= props.store.getState().messagePage;
    let dialogElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messages = state.messagesData.map(mes => <MessageData message={mes.message} id={mes.id}/>)
    let newMessageBody = state.newMessage;

    let onSendMessageClick=()=>{
        props.store.dispatch(adNewMessageActionCreator())
    }
    let onNewMessageChange=(e)=>{
        let mess = e.target.value
        props.store.dispatch(updateNewMessageActionCreator(mess))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DialogsTwo;

