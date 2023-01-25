import { useState } from "react";
import { ToDoForm } from "./components/ToDoForm/ToDoForm";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editToDo, setEditToDo]=useState(null)
  const getTasksHandler = (inputValue) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text: inputValue,
        completed: false,
        id: Math.random().toString(),
      },
    ]);
  };
  return (
    <div>
      <ToDoForm onAddTasks={getTasksHandler} editToDo={editToDo} setEditToDo={setEditToDo} />
      <ToDoList tasks={tasks} setTasks={setTasks} setEditToDo={setEditToDo}/>
    </div>
  );
}

export default App;
