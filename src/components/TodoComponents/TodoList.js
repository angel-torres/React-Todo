import React from "react";
import "./Todo.css";

function TodoList(props) {
    return (
        <div>
            {props.todoItemList.map( item => {
                return <div onClick={props.trash}> { item.todo } </div>
            })}
        </div>
    )
};

export default TodoList;