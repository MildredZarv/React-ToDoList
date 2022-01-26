import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    return(
        <li className='task-container'>
            <span 
                className='check-icon'
                onClick = {props.onComplete}
            ></span>
            <p className={`task-description ${props.completed && 'task-description-completed'}`}>{props.text}</p>
            <span 
                className='delete-icon'
                onClick = {props.onDelete}
            ></span>
        </li>
    );
}

export { TodoItem };