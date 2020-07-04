import { connect } from "react-redux";
import ProfileNewPost from "./ProfileNewPost";
import {updateMessage, addPost, setNewPost} from "../../../redux/reducers/profile-reducer";

let mapStateToProps = (state) => {
    return {
        newPostsText: state.profilePage.newPostsText
    }
}

const ProfileNewPostContainer = connect(mapStateToProps, {updateMessage, addPost, setNewPost})(ProfileNewPost);

export default ProfileNewPostContainer;