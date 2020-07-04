import React from 'react';
import style from './DialogsNewMessage.module.css';
import DialogsNewMessageFormContainer from './DialogsNewMessageForm';


const DialogsNewMessage = (props) => {

    const onSubmit = (formData) => {
        props.sendNewMessage(formData.newMessageText);
    }
    return (
        <div className = {style.main}>            
            <DialogsNewMessageFormContainer onSubmit = {onSubmit} />
        </div>
    )
}

export default DialogsNewMessage;