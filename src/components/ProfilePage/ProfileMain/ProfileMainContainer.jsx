import React from 'react';
import ProfileMain from './ProfileMain';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import {getUserProfileThunkCreator, savePhotoThunkCreator, getAllUsersInfoTK, saveProfileTC} from "../../../redux/reducers/profile-reducer";
import {authThunkCreator} from "../../../redux/reducers/auth-reducer";
import { authRedirect } from '../../../HOC/authRedirect';
import { compose } from 'redux';


class ProfileMainContainer extends React.Component {    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {            
            userId = this.props.userData.id;
        }        
        this.props.getUserProfileThunkCreator(userId);
        this.props.getAllUsersInfoTK(userId);                                
    }
    componentDidUpdate() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userData.id;            
        }               
        this.props.getUserProfileThunkCreator(userId);
    }    
    render() {        
        return (                                   
            <ProfileMain {...this.props} getAllUsersInfo={this.props.getAllUsersInfoTK} saveProfile={this.props.saveProfileTC} userData = {this.props.userData} userInfo = {this.props.userInfo} savePhoto = {this.props.savePhotoThunkCreator} usersInfoFull = {this.props.usersInfoFull} />
        )               
    }
}
const mapStateToProps = (state) => {
    
    return {
        userInfo: state.profilePage.userInfo,
        isAuth: state.auth.isAuth,
        userData: state.auth.userData,
        usersInfoFull: state.profilePage.usersInfoFull
    }
}

const ProfileMainWrapper = compose(
    connect(mapStateToProps, {getUserProfileThunkCreator, authThunkCreator, savePhotoThunkCreator, getAllUsersInfoTK, saveProfileTC}),
    withRouter,
    authRedirect
)(ProfileMainContainer);

export default ProfileMainWrapper;