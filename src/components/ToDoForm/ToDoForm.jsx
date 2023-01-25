import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import styled from "styled-components";
import { useReducer } from "react";
const inputValueReducer = (state, action) => {
  console.log(action);
  if (action.type === "changeInputValue") {
    return {
      ...state,
      value: action.payload,
    };
  }
  if (action.type === "cleaning") {
    return {
      value: action.payload,
    };
  }

};
console.log(inputValueReducer);
export const ToDoForm = ({ onAddTasks }) => {
  // const [inputValue, setInputValue] = useState();

  const [inputValueState, dispatchInputValue] = useReducer(inputValueReducer, {
    value: " ",
  });
  console.log(inputValueState);

  const onChageInputReducer = (event) => {
    dispatchInputValue({ type: "changeInputValue", payload: event.target.value });
    console.log(event.target.value);
  };
  let submitHandlerReducer = () => {
    if (inputValueState.value.trim().length > 0) {
      onAddTasks(inputValueState.value);
     dispatchInputValue({type: "cleaning", payload: " "})
    } else {
      alert("list must not be empty");
    }
  };

  const disabledBtn = submitHandlerReducer;
  return (
    <Container>
      <Input value={inputValueState.value} onChange={onChageInputReducer} />
      <Button onClick={submitHandlerReducer} disabled={!disabledBtn}>
        Add
      </Button>
    </Container>
  );
};

//style
const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
