import React from 'react';
import { Field, reduxForm } from 'redux-form';
const ProfileDataForm = (props) => {
    return ( <form onSubmit={props.handleSubmit}>
        <div><button>Save</button></div>
        <p><span>Full Name: </span></p><Field placeholder={'Name'} name={'fullName'} component={"input"} />
        <p><span>About Me: </span></p><Field placeholder={'About Me'} name={'aboutMe'} component={"input"} />    
        <p><span>Looking for a job: </span></p><Field name={'lookingForAJob'} component={"input"} type={'checkbox'} />
        <p><span>My professional skills: </span></p><Field placeholder={'My scills'} name={'lookingForAJobDescription'} component={"textarea"} />        
    </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'infoForm'})(ProfileDataForm);
export default ProfileDataReduxForm;