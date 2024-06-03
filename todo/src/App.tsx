import './App.css';
import TodoContainer from './components/TodoContainer';
import InputContainer from './components/InputContainer';
import { useState } from 'react';

// interface Task {
//   task: string;
// }
function App() {
  const [inputVal, setInputVal] = useState('');
  const [taskList, setTaskList] = useState<string[]>([]);
  function writeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value);
    console.log(e.target.value)
  }

  function addTask() {
    // const newTask: Task = { task: inputVal };
    if (inputVal !== '') {
      setTaskList((prevTaskList: string[]) => [...prevTaskList, inputVal]);
    }
  }
  function deleteTodo(ind: number) {
    setTaskList((prevTaskList: string[]) => prevTaskList.filter((prevTaskList, prevInd) => {
      return prevInd != ind;
    }
    ));
  }
  console.log(taskList)
  return (
    <main >
      <h1>ToDo</h1>
      <InputContainer input={inputVal} writeTodo={writeTodo} addTask={addTask} />
      <TodoContainer todoList={taskList} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
