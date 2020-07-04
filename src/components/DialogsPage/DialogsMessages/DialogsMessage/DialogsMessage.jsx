import React from 'react';
import style from './DialogsMessage.module.css';

const DialogsMessage = (props) => {

    return (
        <div className = {style.messageBlock}>
            <div className = {style.messageText}>{props.message}</div>
        </div>
    )
}

export default DialogsMessage;