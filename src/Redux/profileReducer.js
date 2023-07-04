import Valera from "../Assets/Valera.jpg";
import Cat from "../Assets/fashionCat.jpg";
import Frog from "../Assets/frogMegaBossjpg.jpg";
import Man from "../Assets/Men.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState={
    newPostText: 'It-kam',
    post: [
        {message: "Hello, I am good", like: 7, img: Cat},
        {message: "It is my first post", like: 77, superlike: 777, img: Frog},
        {message: "HI, YO, Girls", like: 7777, superlike: 77777, img: Man},
    ],
}

const profileReducer = (state=initialState, action) => {
     switch (action.type) {
         case ADD_POST: {
             let newPost = {message: state.newPostText, like: 3, superlike: 2, img: Valera}
             return {
                 ...state,
                 post:[...state.post, newPost],
                 newPostText: ''
             }
         }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText
            }
        }
        default: return state
    }
}

export const addPostActionCreator =()=>({type: ADD_POST})
export const updateNewPostTextActionCreator =(text)=>({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})


export default profileReducer;

