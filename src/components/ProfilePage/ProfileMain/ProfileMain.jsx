import React from 'react';
import style from './ProfileMain.module.css';
import avatar from '../../../assets/img/my-avatar.png';
import ProfileStatus from './ProfileStatus';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import ProfileDataReduxForm from './ProfileDataForm';
import { useEffect } from 'react';

const ProfileMain = (props) => { 
    
    const [editMode, setEditMode] = useState(false);    
    
    const selectedMainPhoto = (e) => {        
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }       
    return (
        <div className = {style.main}>
            <div className  = {style.avatar}>
                {!props.userInfo.userAvatar ? <img src = {avatar} alt='avatar' /> : <img src = {props.userInfo.userAvatar} alt='avatar' />}
                {!props.match.params.userId ? <input type = {'file'} onChange = {selectedMainPhoto} /> : null}                
            </div>
            <div className = {style.infoBlock}>
                <h2>{props.usersInfoFull.fullName}</h2>
                { editMode ? <ProfileDataReduxForm initialValues={props.usersInfoFull} onSubmit={onSubmit} usersInfoFull = {props.usersInfoFull} userInfo = {props.userInfo} /> : <ProfileData goToEditMode={() => {setEditMode(true)}}  userData = {props.userData} usersInfoFull = {props.usersInfoFull} userInfo = {props.userInfo} />}
            </div>
            <div className = {style.statusBlock}>
                <h2>Users ststus</h2>
                <ProfileStatus />
            </div>
        </div>
    )
}

const ProfileData = (props) => {    
    return ( <div>
        {props.userInfo.userId === 7926 && <div><button onClick = {props.goToEditMode}>Edit</button></div> }        
        <p><span>About Me: </span>{props.usersInfoFull.aboutMe}</p>
    <p><span>User ID: </span>{props.userInfo.userId}</p>
    <p><span>Looking for a job: </span>{!props.usersInfoFull.lookingForAJob ? 'No' : 'Yes'}</p>
    {props.usersInfoFull.lookingForAJob ? <p><span>My professional skills: </span>{props.usersInfoFull.lookingForAJobDescription}</p> : null}   
    </div>
    );
}

export default ProfileMain;