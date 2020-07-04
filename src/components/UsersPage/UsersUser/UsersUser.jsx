import React from 'react';
import style from './UsersUser.module.css';
import avatar from '../../../assets/img/my-avatar.png';
import { NavLink } from 'react-router-dom';

const UsersUser = (props) => {       
    let follow = () => {               
        let userId = props.userId;               
        props.followingThunkCreator(userId);        
    }
    let unfollow = () => {                
        let userId = props.userId;
        props.unfollowingThunkCreator(userId);
    }
    let path = '/profile/' + props.userId;
    return (
        <div className = {style.users}>
            <div className = {style.usersBlock}>
                <div className  = {style.avatar}>
                    
                    <NavLink to = {path}><img src = {props.photos.small != null ? props.photos.small : avatar} alt='avatar' /><br></br></NavLink>                                      
                    {props.followed ? <button onClick = {unfollow}>Unfollow</button> : <button onClick = {follow}>Follow</button>}                    
                </div>
                <div className = {style.infoBlock}>
                    <p><span>Name: </span>{props.name}</p>
                    {props.status != null ? <p><span>Status: </span>{props.status}</p> : null}
                </div>
            </div>
        </div>
    )
    
}

export default UsersUser;