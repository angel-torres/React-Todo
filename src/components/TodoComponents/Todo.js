import React from "react";
import "./Todo.css";

const Todo = (props) => {
    return (

            <div 
            onClick={() => {props.toggleCompleted(props.todo.id)}}
                className={props.todo.completed ? "completed": "list-item"}
                >
                { props.todo.todo } 
             </div>
    )
};

export default Todo; 