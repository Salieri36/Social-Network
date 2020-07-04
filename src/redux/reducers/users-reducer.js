import { userAPI } from "../../API/API";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FOLLOW_IN_PROGRES = 'TOGGLE_FOLLOW_IN_PROGRES';
const SET_USERS_STATUS ='SET_USERS_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    users: [
        
    ],
    totalCount: 0,
    usersOnPage: 10,
    currentPage: 1,
    totalPagesCount: 1,
    followInProgres: false,
    usersStatus: 'my status'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_FOLLOW_IN_PROGRES:
            return {
                ...state,
                followInProgres: action.progres
            }
        case SET_USERS_STATUS:
            return {
                ...state,
                usersStatus: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                usersStatus: action.statusText
            }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleFollowingProgres = (progres) => ({type: TOGGLE_FOLLOW_IN_PROGRES, progres});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});
export const updateProfileStatus = (statusText) => ({type: UPDATE_STATUS, statusText});


export const updateStatusThankCreator = (statusText) => {
    return (dispatch) => {
        userAPI.updateStatus(statusText).then(data => {
            dispatch(updateProfileStatus(statusText));
        });
    }
}
export const setUserStatusThunkCreator = (userId) => {
    return (dispatch) => {        
        userAPI.getUserStatus(userId).then(data => {                       
            dispatch(setUsersStatus(data));                       
        });
    }
};
export const getUserThunkCreator = (currentPage) => {
    return (dispatch) => {
        userAPI.getUsers(currentPage).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
};
export const updateUserThunkCreator = (currentPage) => {
    return (dispatch) => {
        userAPI.getUsers(currentPage).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setCurrentPage(currentPage));
        });
    }
};
export const followingThunkCreator = (userId) => {    
    return (dispatch) => {  
        dispatch(toggleFollowingProgres(true));      
        userAPI.following(userId).then(data => {            
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }                        
        });
        dispatch(toggleFollowingProgres(false));
    }
};
export const unfollowingThunkCreator = (userId) => {    
    return (dispatch) => {  
        dispatch(toggleFollowingProgres(true));      
        userAPI.unfollowing(userId).then(data => {            
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }                        
        });
        dispatch(toggleFollowingProgres(false));
    }
};
export default userReducer;