import {connect} from 'react-redux';
import ProfilePosts from './ProfilePosts';
import { getPostsSelector } from '../../../redux/reducers/state-selectors';

let mapStateToProps = (state) => {
    return {
        posts: getPostsSelector(state)
    }
}

const ProfilePostsContainer = connect(mapStateToProps)(ProfilePosts);

export default ProfilePostsContainer;