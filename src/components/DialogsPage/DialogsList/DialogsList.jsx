import React from 'react';
import style from './DialogsList.module.css';


const DialogsList = () => {
    return (
        <div className = {style.main}>
            <ul>
                <li>Ivan</li>
                <li>Sergey</li>
                <li>Anna</li>
                <li>Sasha</li>
                <li>Alex</li>
            </ul>         
        </div>
    )
}

export default DialogsList;