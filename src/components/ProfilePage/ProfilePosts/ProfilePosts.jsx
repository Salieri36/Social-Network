import React from 'react';
import style from './ProfilePosts.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfilePosts = (props) => {

let postsElements = props.posts.map( (post) => <ProfilePost postsText = {post.postsText} likesCount = {post.likesCount} key = {post.id}/>); 
    
    return (
        <div className = {style.main}>            
            {postsElements}
        </div>
    )
}

export default ProfilePosts;