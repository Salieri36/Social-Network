import React from 'react';
import style from './ProfilePost.module.css';
import avatar from '../../../../assets/img/my-avatar.png';

const ProfilePost = (props) => {    
    return (
        <div className = {style.postBlock}>
            <div className = {style.post}>
                <div className = {style.author}>
                    <img src = {avatar} alt = 'avatar' />
                    <p>Roman B.</p>
                </div>
                <div className = {style.postsText}> {props.postsText} </div>   
            </div>
            <div className = {style.likes}>
                likes: <span>{props.likesCount}</span>    
            </div>             
        </div>
    )
}

export default ProfilePost;