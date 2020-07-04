// import React, { useState, useEffect } from 'react';
// import style from './ProfileStatus.module.css';
// import { connect } from 'react-redux';
// import { setUserStatusThunkCreator, updateStatusThankCreator } from '../../../redux/reducers/users-reducer';
// import { compose } from 'redux';
// import { withRouter } from 'react-router-dom';

// const ProfileStatusHook = (props) => {
//     let [editMode, toggleEditMode] = useState(false);
//     let [status, setStatusHook] = useState(props.status);    

//     useEffect( () => {
//         console.log(props);
//         if (props.userStatus) {
//             setStatusHook(props.userStatus);
//         }                             
//         setStatusHook(props.status);       
//     }, [props.status, props.userStatus]);

//     const activatedEditMode = () => {
//         toggleEditMode(true);
//     }
//     const deactivatedEditMode = () => {
//         toggleEditMode(false);        
//         props.updateStatusThankCreator(status);
//     }    
//     const changeStatus = (e) => {
        
//         setStatusHook(e.currentTarget.value);
//     }
//     return (
//         <div>            
//             {editMode 
//                 ? 
//                     <div className = {style.inputBlock}>
//                         <input ref = {inputElement} autoFocus = {true} onBlur = {deactivatedEditMode} onChange = {changeStatus} ></input>
//                     </div>
//                 :
//                     <div>
//                         <span onDoubleClick = {activatedEditMode}>{props.status || "status"}</span>
//                     </div>
//             }            
//         </div>
//     )
// }

// let inputElement = React.createRef();

// const mapStateToProps = (state) => {
//     return {
//         status: state.usersPage.usersStatus,
//         userData: state.auth.userData,
//         userStatus: state.profilePage.userInfo.userStatus
//     }    
// }

// const ProfileStatusContainer = compose(
//     connect(mapStateToProps, {setUserStatusThunkCreator, updateStatusThankCreator}),
//     withRouter
// )(ProfileStatusHook);

// export default ProfileStatusContainer;