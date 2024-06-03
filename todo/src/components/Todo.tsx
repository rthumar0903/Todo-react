import React from "react";

interface TodoProps {
    todo: string;
    deleteTodo: (index: number) => void

    index: number
}

function Todo({ todo, index, deleteTodo }: TodoProps) {
    return (

        <div className='todo'>
            <p>{todo}</p>
            <div className='actions'>
                <input type='checkbox' />
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>


    )
}

export default Todo