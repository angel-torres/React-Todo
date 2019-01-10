import React from 'react';
import './Todo.css';



function TodoForm(props) {

    return (
        <form onSubmit={props.addNewItem}>
            <input 
                type="text"
                value={props.inputText}
                placeholder="What should we do today?" 
                onChange={props.handleChanges}
            />
            <button type="submit">Add</button>
            <button onClick={props.removeSelected}>Remove Selected</button>
        </form>
    )
};

export default TodoForm;