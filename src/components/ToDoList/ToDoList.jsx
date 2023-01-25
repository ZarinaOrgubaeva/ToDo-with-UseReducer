import { ToDoItem } from "../ToDoItem/ToDoItem";
export const ToDoList = ({ tasks, setTasks,setEditToDo }) => {
 return(
    <ul>
    {tasks.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} setTasks={setTasks} tasks={tasks} setEditToDo={setEditToDo} />
    ))}
  </ul>
 )
   
}
