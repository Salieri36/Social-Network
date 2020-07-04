import React from 'react';
import style from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className = {style.sidebar}>
            <ul>
                <li className = {style.active}><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dialogs'>Dialogs</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li><NavLink to='/setting'>Setting</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar;