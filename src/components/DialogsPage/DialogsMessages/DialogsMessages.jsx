import React from 'react';
import style from './DialogsMessages.module.css';
import DialogsMessage from './DialogsMessage/DialogsMessage';

const DialogsMessages = (props) => {

    let messageElement = props.messages.map( (message) => <DialogsMessage message = {message.messagesText}/>);

    return (
        <div className = {style.main}>            
            {messageElement} 
        </div>
    )
}

export default DialogsMessages;