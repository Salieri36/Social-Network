import React from 'react';
import style from './DialogsNewMessageForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { FormControl3 } from '../../Login/FormControl';
import { maxLengthCreator, requiredField } from '../../validator';

const maxLength10 = maxLengthCreator(10);
const DialogsNewMessageForm = (props) => {
    return (
        <form className = {style.main} onSubmit = {props.handleSubmit}>            
            <Field component = {FormControl3} name = {"newMessageText"} placeholder = {"Write yor message..."} validate = {[requiredField, maxLength10]}></Field>
            <div className = {style.btn}>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsNewMessageFormContainer = reduxForm({form: 'newMessage'})(DialogsNewMessageForm);

export default DialogsNewMessageFormContainer;