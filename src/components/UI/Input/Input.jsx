import styled from "styled-components"
export const Input = ({value, onChange}) =>{
    return(
        <StyledInput type="text" placeholder="Add Task" value={value.value} onChange={onChange}/>
    )
}
//style
const StyledInput = styled.input`
    width: 300px;
    padding: 5px;
    border-radius: 12px;
    border: 1px solid blue;
    text-align: center;
`