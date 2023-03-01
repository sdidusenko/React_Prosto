import React from "react";
import {adNewMessageActionCreator, updateNewMessageActionCreator} from '../../Redux/messageReducer'
import Dialogs from "../Dialogs/Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (mess) => {
            dispatch(updateNewMessageActionCreator(mess))
        },
        sendMessage: () => {
            dispatch(adNewMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
