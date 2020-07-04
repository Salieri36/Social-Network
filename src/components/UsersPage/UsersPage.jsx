import React from 'react';
import style from './UsersPage.module.css';
import UsersUser from './UsersUser/UsersUser';
import * as axios from 'axios';
import { userAPI } from "../../API/API";

const UsersPage = (props) => {
    
    let userElement = props.usersPage.users.map( (user) => <UsersUser unfollowingThunkCreator = {props.unfollowingThunkCreator} followingThunkCreator = {props.followingThunkCreator} followed = {user.followed} name = {user.name} photos = {user.photos} status = {user.status} userId = {user.id} usersPage = {props.usersPage} unfollow = {props.unfollow} follow = {props.followingThunkCreator} key = {user.id}/>);
    let pagesCount = Math.ceil(props.usersPage.totalCount / props.usersPage.usersOnPage);
    let pages = [];
    for (let i = 1; i <= 23; i++) {
        pages.push(i);        
    }
    let changePage = (page) => {                
        props.updateUserThunkCreator(page);
    }
    let pagesElement = pages.map( (page) => {        
        return <span className = {props.usersPage.currentPage === page && style.selectedPage} onClick = {() => {changePage(page)}}>{page}</span>
    });        
    return (
        <div className = {style.users}>
            {userElement}            
            {pagesElement}
        </div>
    )
}

export default UsersPage;