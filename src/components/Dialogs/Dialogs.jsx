import s from '../Dialogs/dialogs.module.css'
import MessageData from '../Dialogs/Messages/Messages';
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import React from "react";


const Dialogs = (props) => {
    let state= props.messagePage;
    let dialogElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messages = state.messagesData.map(mes => <MessageData message={mes.message} id={mes.id}/>)
    let newMessageBody = state.newMessage;

    let onSendMessageClick=()=>{
        props.sendMessage()
    }
    let onNewMessageChange=(e)=>{
        let mess = e.target.value
        props.updateNewMessageBody(mess)
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
export default Dialogs;

