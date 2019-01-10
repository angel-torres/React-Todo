import React from "react";
import "./Todo.css";

const Todo = (props) => {
    return (
        <div>
            {props.todoItemList.map( item => {
                return <div> { item.todo } </div>
            })}
        </div>
    )
};

export default Todo;