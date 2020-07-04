import React from 'react';
import style from './Header.module.css';
import logo from '../../assets/img/Lineage_OS_Logo.png';
import { Redirect, NavLink } from 'react-router-dom';

const Header = (props) => {
    const logout = () => {
        props.logoutThunkCreator();
    }    
    return (
        <div className = {style.header}>
            <div className = {style.logo}>
                <img src = {logo} alt = 'logo' />
            </div>
            <div className = {style.loginBlock}>
                {!props.auth.isAuth ? <button><NavLink to='/login'>Login</NavLink></button> : props.auth.userData.login}{props.auth.isAuth && <button onClick = {logout}>Logout</button> } 
            </div>
        </div>
    )
}

export default Header;