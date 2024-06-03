import React from "react";

interface Input {
    input: string;
    writeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
    addTask: () => void;

}
function InputContainer({ input, writeTodo, addTask }: Input) {
    return (
        <div className='input-container'>
            <input type='text' value={input} onChange={(e) => { writeTodo(e) }} />
            <button onClick={addTask}>+</button>
        </div>
    )
}

export default InputContainer