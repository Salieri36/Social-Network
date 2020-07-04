import { userAPI } from "../../API/API";

const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_ID = 'SET_USER_ID';
const SET_NEW_POST = 'SET_NEW_POST';
const SAVE_PHOTO = 'SAVE_PHOTO';
const GET_ALL_USER_INFO = 'GET_ALL_USER_INFO';

let initialState = {
    posts: [
        {id: 1, name: 'Roman B.', postsText: 'text<br></br>text<br></br>text<br></br>text<br></br>text<br></br>', likesCount: 9},
        {id: 2, name: 'Roman B.', postsText: 'test test', likesCount: 2},
        {id: 3, name: 'Roman B.', postsText: 'new message!!!!', likesCount: 15}
    ],
    usersInfoFull:{

    },    
    userInfo: {
        userAvatar: null,
        userStatus: null,
        userId: null,
        userName: null
    },
    changedUser: null,
    photos: null
}
let postsId = 4;
const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case UPDATE_MESSAGE:            
            return {
                ...state,               
                newPostsText: action.newText
            }           
       
        case SET_USER_PROFILE:
            let newUserInfo = {
                userAvatar: action.photo, 
                userStatus: action.info, 
                userId: action.id, 
                userName: action.name
            };
            return {
                ...state,
                userInfo: newUserInfo
            }
        case SET_USER_ID:
            return {
                ...state,
                changedUser: action.userId
            }
        case SAVE_PHOTO:
            return {
                ...state,
                photos: action.photos
            }
        case GET_ALL_USER_INFO:
            return {
                ...state,
                usersInfoFull: action.info
            }
        case SET_NEW_POST:
            let newPost = {                
                id: postsId,
                name: 'Roman B.',
                postsText: action.newPostText,
                likesCount: 0
            }            
            postsId++;
            return {
                ...state,
                posts: [...state.posts, newPost]                
            }           
        default:
            return state;
    }
}

export const updateMessage = (newText) => ({ type: UPDATE_MESSAGE, newText });
export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = (photo, info, id, name) => ({type: SET_USER_PROFILE, photo, info, id, name});
export const setUserId = (userId) => ({type: SET_USER_ID, userId});
export const setNewPost = (newPostText) => ({type: SET_NEW_POST, newPostText});
export const savePhotoAC = (photos) => ({type: SAVE_PHOTO, photos});
export const getAllUsersInfo = (info) => ({type: GET_ALL_USER_INFO, info});

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        userAPI.getUserProfile(userId).then(data => {                        
            dispatch(setUserProfile(data.photos.large, data.aboutMe, data.userId, data.fullName));            
        });
    }
}

export const saveProfileTC = (profile) => {
    return (dispatch, getState) => {
        const userId = getState().auth.userData.id;
        userAPI.saveProfile(profile).then(data => {                        
            if (data.resultCode === 0) {
                dispatch(getAllUsersInfoTK(userId));
            }            
        });
    }
}

export const getAllUsersInfoTK = (userId) => {    
    return (dispatch) => {
        userAPI.getUserProfile(userId).then(data => {                        
            dispatch(getAllUsersInfo(data));                        
        });
    }
}

export const savePhotoThunkCreator = (file) => {
    return (dispatch) => {
        userAPI.putPhoto(file).then(data => {            
            dispatch(savePhotoAC(data.data.photos));            
        });
    }
}

export default profileReducer;