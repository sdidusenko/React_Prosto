import Cat from "../Assets/fashionCat.jpg";
import Frog from "../Assets/frogMegaBossjpg.jpg";
import Man from "../Assets/Men.jpg";
import Dima from './../Assets/Dima.jpg'
import Andrey from './../Assets/Andrey.jpg'
import Sveta from './../Assets/Sveta.jpg'
import Sasha from './../Assets/Sasha.jpg'
import Viktor from './../Assets/Viktor.jpg'
import Valera from './../Assets/Valera.jpg'
import Olga from './../Assets/Olga.jpg'
import Petro from './../Assets/Petro.jpg'
import Nadiya from './../Assets/Nadiya.jpg'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE='UPDATE-NEW-MESSAGE'
const AD_NEW_MESSAGE='AD-NEW-MESSAGE'


let store = {
    _state: {
        profilePage: {
            newPostText: 'It-kam',
            post: [
                {message: "Hello, I am good", like: 7, img: Cat},
                {message: "It is my first post", like: 77, superlike: 777, img: Frog},
                {message: "HI, YO, Girls", like: 7777, superlike: 77777, img: Man},
            ],
            friends: [
                {name: 'Olga', id: 1, img: Olga},
                {name: 'Petro', id: 2, img: Petro},
                {name: 'Nadiya', id: 3, img: Nadiya},
            ],

        },
        messagePage: {
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
        },
        sidebar:{}
    },



    _renderAllTree() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._renderAllTree = observer
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {message: this._state.profilePage.newPostText, like: 3, superlike: 2, img: Valera}
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderAllTree(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._renderAllTree(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagePage.newMessage = action.mess
            this._renderAllTree(this._state)
        }
        else if (action.type === AD_NEW_MESSAGE) {
            let messages = {message: this._state.messagePage.newMessage, id: 6}
            this._state.messagePage.messagesData.push(messages)
            this._state.messagePage.newMessage = ''
            this._renderAllTree(this._state)
        }
    },
}

export const addPostActionCreator =()=>({type: ADD_POST})
export const updateNewPostTextActionCreator =(text)=>({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    })
export const adNewMessageActionCreator=()=>({type:AD_NEW_MESSAGE})
export const updateNewMessageActionCreator=(newMessage)=>
    ({type:UPDATE_NEW_MESSAGE,
        mess:newMessage})


window.store = store

export default store