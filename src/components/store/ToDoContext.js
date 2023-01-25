import { createContext } from "react";
export const ToDoContext = createContext({});
// export const ToDoProvaider = (props) => {
//   const [tasks, setTasks] = useState([]);
//   const state = {
//     tasks,
//     setTasks,
//   };
//   return (
//     <ToDoContext.Provider value={state}>{props.children}</ToDoContext.Provider>
//   );
// };
