import React from "react";
import Todo from "./Todo"
import "./Todo.css";

function TodoList(props) {
    return (
        <div>
            {props.todoItemList.map( todo => {
                return (
                 <Todo 
                 todoItemList={props.todoItemList} 
                 toggleCompleted={props.toggleCompleted} 
                 todo={todo}
             />
    )})}
           
        </div>
    )
};

export default TodoList;