import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <>
            <div className='search-container'>
                <input 
                    className = 'search-task' 
                    placeholder = 'type to search'
                    onChange = {onSearchValueChange}
                    value = {searchValue}
                ></input>
                <span className='search-icon'></span>
            </div>
        </>
    );
}

export { TodoSearch };