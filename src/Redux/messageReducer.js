import Dima from "../Assets/Dima.jpg";
import Andrey from "../Assets/Andrey.jpg";
import Sveta from "../Assets/Sveta.jpg";
import Sasha from "../Assets/Sasha.jpg";
import Viktor from "../Assets/Viktor.jpg";
import Valera from "../Assets/Valera.jpg";


const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const AD_NEW_MESSAGE = 'AD-NEW-MESSAGE'

let initialState={
    newMessage: 'tap new message',
    messagesData: [
        {message: 'Hi', id: 1},
        {message: 'How is your it-kamasutra?', id: 2},
        {message: 'Yo', id: 3},
        {message: 'Yo', id: 4},
        {message: 'Yo', id: 5},
    ],
    dialogsData: [
        {name: 'Dima', id: 1, img: Dima},
        {name: 'Andrey', id: 2, img: Andrey},
        {name: 'Sveta', id: 3, img: Sveta},
        {name: 'Sasha', id: 4, img: Sasha},
        {name: 'Viktor', id: 5, img: Viktor},
        {name: 'Valera', id: 6, img: Valera},
    ],
}

const messageReducer = (state=initialState, action) => {
      switch (action.type){
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.mess
            }
        case AD_NEW_MESSAGE:
            let mess = state.newMessage;
            return {
                ...state,
                newMessage: '',
                messagesData: [{message: mess, id: 7}, ...state.messagesData, {message: mess, id: 7}]
            }
        default:
            return state
        }
}

export const adNewMessageActionCreator=()=>({type:AD_NEW_MESSAGE})
export const updateNewMessageActionCreator=(newMessage)=>
    ({type:UPDATE_NEW_MESSAGE,
        mess:newMessage})
export default messageReducer;