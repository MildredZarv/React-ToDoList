import React from 'react';
import './AnyTask.css';
import noTask from '../images/new-task.png';

function AnyTask(){
    return(
        <>
            <img id='movement' src={noTask} alt = 'Task image'/>
            <h3>Oh, you've got nothing!</h3>
            <p>Use the button below to add new tasks</p>
        </>
    );
}

export {AnyTask}; 