import React from 'react';
import style from './DialogsPage.module.css';
import DialogsList from './DialogsList/DialogsList';
import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';
import DialogsNewMessageContainer from './DialogsNewMessage/DialogsNewMessageContainer';


const DialogsPage = () => {
    return (
        <div className = {style.dialog}>
            <div className = {style.list}>
                <DialogsList />
            </div>
            <div className = {style.messages}>
                <DialogsMessagesContainer />
                <DialogsNewMessageContainer />
            </div>            
        </div>
    )
}

export default DialogsPage;