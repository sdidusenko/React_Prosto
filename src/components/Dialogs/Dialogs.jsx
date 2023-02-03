import s from './dialogs.module.css'
import MessageData from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messages = props.messagesData.map(mes => <MessageData message={mes.message} id={mes.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>
                            PUSH!!!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

