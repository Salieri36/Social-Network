import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import {follow, unfollow, getUserThunkCreator, updateUserThunkCreator, followingThunkCreator, unfollowingThunkCreator} from '../../redux/reducers/users-reducer';
import * as axios from "axios";
import React from 'react';
import { userAPI } from "../../API/API";
import { Redirect } from "react-router-dom";
import { authRedirect } from "../../HOC/authRedirect";
import { compose } from "redux";



class UsersPageAPI extends React.Component {    
    componentDidMount() {               
        this.props.getUserThunkCreator(this.props.usersPage.currentPage);
    }
    render() {        
        return <UsersPage usersPage = {this.props.usersPage} unfollowingThunkCreator = {this.props.unfollowingThunkCreator} followingThunkCreator = {this.props.followingThunkCreator} updateUserThunkCreator = {this.props.updateUserThunkCreator} follow = {this.props.follow} unfollow = {this.props.unfollow} setCurrentPage = {this.props.setCurrentPage} setUsers = {this.props.setUsers} />
    }
}

let mapStateToProps = (state) => {       
    return {
        usersPage: state.usersPage,
        isAuth: state.auth.isAuth
    }
}

const UsersPageContainer = compose(
    connect(mapStateToProps, {follow, unfollow, getUserThunkCreator, updateUserThunkCreator, followingThunkCreator, unfollowingThunkCreator}),
    authRedirect
)(UsersPageAPI);

export default UsersPageContainer;