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
import {renderAllTree} from "../render";



let state = {
    profilePage: {
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


}
export let adPost = (postMessage) => {

    let newPost={message: postMessage, like: 3, superlike: 2, img: Valera}
    state.profilePage.post.push(newPost)
    renderAllTree(state)
}


export default state