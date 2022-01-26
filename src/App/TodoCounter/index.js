import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <>
            <h1 className='task-title'>Your tasks</h1>
            <h2 className='task-completedTodos'>Completed {completedTodos} of {totalTodos}</h2>
        </>
    );
}

export { TodoCounter };