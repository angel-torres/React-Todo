import React from 'react';
import './Todo.css';



function TodoForm(props) {

    return (
        <form className="form">
            <input
                className="text-box" 
                type="text"
                value={props.inputText}
                placeholder="What should we do today?" 
                onChange={props.handleChanges}
                name="inputText"
            />
            <button 
                className="add-button"  
                onClick={props.addNewItem}  
            >Add</button>
            <button 
            onClick={props.removeSelected}
            className="remove-button"
            >Remove Selected</button>
        </form>
    )
};

export default TodoForm;