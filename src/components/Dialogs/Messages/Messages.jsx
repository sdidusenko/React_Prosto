import s from "./Messages.module.css";

const MessageData = (props) => {
    return (
        <div
            className={s.message}>{props.message}
        </div>

    )
}
export default MessageData