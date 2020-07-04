import React from 'react';
import style from './FormControl.module.css';


const FormControl = ({input, meta, ...props}) => {
    const errorText = meta.error;
    const hasError = meta.touched && meta.error;
    return (
        <div className = {style.main} >
            <div>
                <input {...input} {...props} className = {hasError && style.error}/>
            </div>
            {hasError && <span>{errorText}</span>}
        </div>
    )
}


export default FormControl;

export const FormControl2 = ({input, meta, ...props}) => {
    const errorText = meta.error;
    const hasError = meta.touched && meta.error;
    return (
        <div className = {style.main} >
            <div>
                <input {...input} {...props} className = {hasError && style.error}/>
            </div>
            {hasError && <span>{errorText}</span>}
        </div>
    )
}

export const FormControl3 = ({input, meta, ...props}) => {
    const errorText = meta.error;
    const hasError = meta.touched && meta.error;
    return (
        <div className = {style.main} >
            <div>
                <textarea {...input} {...props} className = {hasError && style.error}/>
            </div>
            {hasError && <span>{errorText}</span>}
        </div>
    )
}
