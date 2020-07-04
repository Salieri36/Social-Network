import { userAPI } from "../../API/API";
import { Redirect } from "react-router-dom";
import React from 'react';

const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';
const INIT = 'INIT';

let initialState = {
    userData: {
        id: null,
        login: null,
        email: null        
    },    
    isAuth: false,
    init: false
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:             
            return {
                ...state,
                userData: action.userData,               
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                userData: {...state.userData, id: null, login: null, email: null},               
                isAuth: false 
            }
        case INIT:            
            return {
                ...state,
                init: true
            }                   
        default:
            return state;
    }
}


export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const logautAC = () => ({type: LOGOUT});
export const initilized = () => ({type: INIT});

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        userAPI.login(email, password, rememberMe).then( data => {
            dispatch(setUserData(data.data));
        });
        setTimeout(() => {
            userAPI.auth().then( data => {                
                dispatch(setUserData(data.data));
            });
        }, 1000)            
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        userAPI.logout().then( data => {
            dispatch(logautAC());                        
        });        
    }
}
export const authThunkCreator = () => {
    return (dispatch) => {        
        return userAPI.auth().then(data => {            
            if (data.resultCode === 0) {                
                dispatch(setUserData(data.data));
            }          
        });       
    }
};

export const initTK = () => {
    return (dispatch) => {
        let promise = dispatch(authThunkCreator());        
        promise.then( () => {
            dispatch(initilized());
        });
    }
}
export default authReducer;