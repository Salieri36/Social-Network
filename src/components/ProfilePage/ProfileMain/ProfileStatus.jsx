import React from 'react';
import style from './ProfileStatus.module.css';
import { connect } from 'react-redux';
import { setUserStatusThunkCreator, updateStatusThankCreator } from '../../../redux/reducers/users-reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ProfileStatusClass extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {            
            userId = this.props.userData.id;
        }
        this.props.setUserStatusThunkCreator(userId);        
    }
    componentDidUpdate() {
        let userId = this.props.match.params.userId;
        if (!userId) {            
            userId = this.props.userData.id;
        }
        this.props.setUserStatusThunkCreator(userId);        
    }
    state = {
        editMode: false,
        text: ""
    }
    activeEditMode = () => {        
        if (this.props.userId === 7926) {
            this.setState({
                editMode: true
            })
        }      
    }
    deactiveEditMode = () => {        
        let statusText = inputElement.current.value;         
        this.props.updateStatusThankCreator(statusText);                
        this.setState({
            editMode: false,
            text: this.props.status
        })        
    }    
    render() {        
        return (
            <div>            
                {this.state.editMode 
                    ? 
                        <div className = {style.inputBlock}>
                            <input ref = {inputElement} autoFocus = {true} onBlur = {this.deactiveEditMode}></input>
                        </div>
                    :
                        <div>
                            <span onDoubleClick = {this.activeEditMode}>{this.props.status || "status"}</span>
                        </div>
                }            
            </div>
        );
    }
}

let inputElement = React.createRef();

const mapStateToProps = (state) => {
    return {
        status: state.usersPage.usersStatus,
        userData: state.auth.userData,
        userId: state.profilePage.userInfo.userId
    }    
}

const ProfileStatusContainer = compose(
    connect(mapStateToProps, {setUserStatusThunkCreator, updateStatusThankCreator}),
    withRouter
)(ProfileStatusClass);

export default ProfileStatusContainer;