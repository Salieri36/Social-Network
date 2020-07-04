import React from 'react';
import style from './ProfileNewPost.module.css';
import ProfileNewPostFormWrapper from './ProfileNewPostForm';

const ProfileNewPost = (props) => {    
    const onSubmit = (formData) => {        
        props.setNewPost(formData.newPostText);
    }        
    return (
        <div className = {style.main}>
            <h2>My Posts</h2>
            <ProfileNewPostFormWrapper onSubmit = {onSubmit} setNewPost = {props.setNewPost}/>            
        </div>
    )
}

export default ProfileNewPost;