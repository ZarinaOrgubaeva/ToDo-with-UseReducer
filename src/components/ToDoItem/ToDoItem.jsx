import { useContext } from "react";
import styled from "styled-components";
import { ToDoContext } from "../store/ToDoContext";
import { Button } from "../UI/Button/Button";
export const ToDoItem = ({ todo, setEditToDo }) => {
  const context = useContext(ToDoContext);
  const completeHandler = () => {
    const checked = context.tasks.map((item) => {
      if (todo.id === item.id) {
        return {
          ...item,
          completed: !!item.completed,
        };
      }
      return item;
    });
    context.setTasks(checked);
  };
  const editHandler = ({ id }) => {
    const findToDo = context.tasks.find((todo) => todo.id === id);
    setEditToDo(findToDo);
  };
  const { text } = todo;
  const deleteHandler = () => {
    const filteredTodos = context.tasks.filter((item) => item.id !== todo.id);
    context.setTasks(filteredTodos);
  };
  return (
    <StyledList>
      <input type="checkbox" />
      <p>{text}</p>
      <BtnStyled onclick={completeHandler}>Complete</BtnStyled>
      <Button onClick={editHandler}>Edit</Button>
      <BtnStyledDelete onClick={deleteHandler}>Delete</BtnStyledDelete>
    </StyledList>
  );
};
//style
const StyledList = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blueviolet;
  border-radius: 10px;
  width: 400px;
  margin-left: 28rem;
  margin-top: 2rem;
`;
const BtnStyled = styled.button`
  margin-left: 10rem;
  padding: 6px;
  width: 68px;
  border-radius: 8px;
  border: 1px solid yellowgreen;
  margin-left: 0.5rem;
`;
const BtnStyledDelete = styled.button`
  margin-left: 10rem;
  padding: 6px;
  width: 68px;
  border-radius: 8px;
  border: 1px solid red;
  margin-left: 0.5rem;
`;
