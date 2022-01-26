import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const{addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit = { onSubmit }>
            <label>Add a new task</label>
            <textarea 
                placeholder='type a new task'
                onChange = { onChange }
                value = { newTodoValue }    
            >
            </textarea>
            <div className ='TodoForm-buttonContainer'>
                <button type = 'submit' className = 'TodoForm-button TodoForm-button-add'>Add</button>
                <button type = 'button' className = 'TodoForm-button TodoForm-button-cancel' onClick={ onCancel }>Cancel</button>
            </div>
        </form>
    );
}

export { TodoForm };