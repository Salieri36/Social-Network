import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../validator';
import FormControl, { FormControl2 } from './FormControl';

const LoginForm = (props) => {
    
    return (
        <form className = {style.main} onSubmit = {props.handleSubmit}>
            <div><Field component = {FormControl} type = {"text"} name = {"login"} placeholder = {"Your login"} validate = {requiredField} /></div>
            <div><Field component = {FormControl2} type = {"password"} name = {"password"} placeholder = {"Your password"} validate = {requiredField} /></div>
            <div><Field component = {"input"} type = {"checkbox"} name = {"rememberMe"} /></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginFormContainer = reduxForm({form: 'login'})(LoginForm);

export default LoginFormContainer;