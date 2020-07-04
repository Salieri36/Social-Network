import React from 'react';
import style from './ProfileFormControl.module.css';
import ProfileNewPostFormWrapper from './ProfileNewPostForm';

const ProfileFormControl = (props) => {
    return (
        <div className = {style.main}>
            <h2>My Posts</h2>
            <ProfileNewPostFormWrapper onSubmit = {onSubmit} setNewPost = {props.setNewPost}/>            
        </div>
    )
}

export default ProfileFormControl;