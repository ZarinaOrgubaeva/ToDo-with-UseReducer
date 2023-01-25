import { useState } from "react";
import { ToDoContext } from "./components/store/ToDoContext";
import { ToDoForm } from "./components/ToDoForm/ToDoForm";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editToDo, setEditToDo] = useState(null);
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
    <ToDoContext.Provider value={{ tasks, setTasks }}>
      <ToDoForm
        onAddTasks={getTasksHandler}
        editToDo={editToDo}
        setEditToDo={setEditToDo}
      />
      <ToDoList setEditToDo={setEditToDo} />
    </ToDoContext.Provider>
  );
}

export default App;
