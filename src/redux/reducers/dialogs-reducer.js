const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

let initialState = {
    messages: [
        {id: 1, messagesText: 'NEW message text!@'},
        {id: 2, messagesText: 'NO new message text!'},
        {id: 3, messagesText: 'old message text///'},
        {id: 4, messagesText: 'Many many many many text!@'},
    ],
    newMessagesText: ''
}
let messageId = 5;
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessagesText: action.newMessagesText
            }        
        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: messageId,
                messagesText: action.newMessagesText
            }
            messageId++;
            return {
                ...state,
                messages: [...state.messages, newMessage]                
            }
        default:
            return state;
    }
}

export const updateMessage = (newMessagesText) => ({type: UPDATE_MESSAGE, newMessagesText}); 
export const addMessage = () => ({type: ADD_MESSAGE});
export const sendNewMessage = (newMessagesText) => ({type: SEND_NEW_MESSAGE, newMessagesText});

export default dialogsReducer;