import React from "react";
import Todo from "./Todo"
import "./Todo.css";

function TodoList(props) {
    return (
        <div>
            <Todo todoItemList={props.todoItemList}/>
        </div>
    )
};

export default TodoList;