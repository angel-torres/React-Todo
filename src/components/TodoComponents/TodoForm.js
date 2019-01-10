import React from 'react';
import './Todo.css';



function TodoForm(props) {

    return (
        <form onSubmit={props.addNewItem} className="form">
            <input
                className="text-box" 
                type="text"
                value={props.inputText}
                placeholder="What should we do today?" 
                onChange={props.handleChanges}
                name="inputText"
            />
            <button 
                type="submit"
                className="add-button"    
            >Add</button>
            <button 
            onClick={props.removeSelected}
            className="remove-button"
            >Remove Selected</button>
        </form>
    )
};

export default TodoForm;