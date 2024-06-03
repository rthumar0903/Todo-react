import React from "react";
import Todo from "./Todo";

interface TodoList {
    todoList: string[];
    deleteTodo: (ind: number) => void
}
function TodoContainer({ todoList, deleteTodo }: TodoList) {
    return (
        <div className='task-container'>
            {todoList.map((todo, index) => {
                return (
                    <Todo todo={todo} index={index} deleteTodo={deleteTodo} />
                )
            })}
        </div>

    )
}

export default TodoContainer