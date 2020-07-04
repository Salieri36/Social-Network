import React from 'react';
import style from './ProfilePage.module.css';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import ProfileNewPostContainer from './ProfileNewPost/ProfileNewPostContainer';
import  ProfileMainWrapper  from './ProfileMain/ProfileMainContainer';

const ProfilePage = (props) => {    
    return (
        <div className = {style.profile}>            
            <ProfileMainWrapper />
            <ProfileNewPostContainer />
            <ProfilePostsContainer />
        </div>
    )
}

export default ProfilePage;