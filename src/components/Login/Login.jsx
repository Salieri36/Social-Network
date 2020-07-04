import React from 'react';
import style from './Login.module.css';
import logo from '../../assets/img/Lineage_OS_Logo.png';
import LoginFormContainer from './LoginForm';
import { connect } from 'react-redux';
import { logoutThunkCreator, loginThunkCreator } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger;
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe);        
    }
    setTimeout( () => {
        
    }, 1000);
    if (props.isAuth) {
        return <Redirect to = {"/profile"} />
    }
    
    return (
        <div className = {style.main}>
            <h1>LOGIN</h1>
            <LoginFormContainer onSubmit = {onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const LoginContainer = connect(mapStateToProps, {loginThunkCreator, logoutThunkCreator})(Login);

export default LoginContainer;