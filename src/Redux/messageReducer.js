const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const AD_NEW_MESSAGE = 'AD-NEW-MESSAGE'



const messageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.mess
            return state
        case AD_NEW_MESSAGE:
            let messages = state.newMessage
            state.messagesData.push({id: 6, message: messages})
            state.newMessage = ''
            return state
        default: return state
    }
}

export const adNewMessageActionCreator=()=>({type:AD_NEW_MESSAGE})
export const updateNewMessageActionCreator=(newMessage)=>
    ({type:UPDATE_NEW_MESSAGE,
        mess:newMessage})
export default messageReducer;