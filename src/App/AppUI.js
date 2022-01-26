import React from 'react';
import { TodoContext } from './TodoContext';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { AnyTask } from './AnyTask';
import { Loading } from './Loading';


function AppUI(){
    const {error, loading, searchedTodos, completeTodos, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <p>Something wrong happened</p>}
                {loading && <Loading></Loading>}
                {(!loading && !searchedTodos.length ) && <AnyTask/>}
                {searchedTodos.map(todo => (
                <TodoItem 
                    key = {todo.text} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onComplete = {() => completeTodos(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm>

                    </TodoForm>
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal = { setOpenModal }
                openModal = {openModal}
            />
    </>
    );
}

export { AppUI };