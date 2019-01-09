import React from 'react';
import './Todo.css';

function TodoForm(props) {
    return (
        <form>
            <input 
                type="text"
                placeholder="What should we do today?"
            />
        </form>
    )
};

export default TodoForm;