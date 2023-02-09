import s from './dialogs.module.css'
import MessageData from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messages = props.messagesData.map(mes => <MessageData message={mes.message} id={mes.id}/>)
    let newMessageElement =React.createRef()
    let addNewMessage =()=>{
        let action={type:'AD-NEW-MESSAGE'}
        props.dispatch(action)
    }
    let onMessageChange =()=>{
        let newMessage =newMessageElement.current.value
        let action={type:'UPDATE-NEW-MESSAGE',mess:newMessage}
        props.dispatch(action)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <div>
                        <textarea onChange={onMessageChange}
                                  id='new-message'
                                  ref={newMessageElement}
                                  value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addNewMessage}>
                            PUSH!!!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

