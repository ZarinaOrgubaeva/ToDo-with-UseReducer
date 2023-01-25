import { useContext } from "react";
import { ToDoContext } from "../store/ToDoContext";
import { ToDoItem } from "../ToDoItem/ToDoItem";
export const ToDoList = ({setEditToDo}) => {
  const context= useContext(ToDoContext)
 return(
    <ul>
    {context.tasks.map((todo) => (
      <ToDoItem key={todo.id} todo={todo}  setEditToDo={setEditToDo} />
    ))}
  </ul>
 )
   
}
