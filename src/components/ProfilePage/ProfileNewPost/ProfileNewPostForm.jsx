import React from 'react';
import style from './ProfileNewPostForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../validator';
import { FormControl3 } from '../../Login/FormControl';

let maxLength20 = maxLengthCreator(20);
const ProfileNewPostForm = (props) => {                
    return (
        <form className = {style.main} onSubmit = {props.handleSubmit}>
            <Field component = {FormControl3} name = {"newPostText"} placeholder = {"Write your posts text"} validate = {[requiredField, maxLength20]}></Field>
            <div className = {style.btn}>
                <button>Send</button>
            </div>
        </form>
    )
}

const ProfileNewPostFormWrapper = reduxForm({form: 'newPost'})(ProfileNewPostForm);

export default ProfileNewPostFormWrapper;