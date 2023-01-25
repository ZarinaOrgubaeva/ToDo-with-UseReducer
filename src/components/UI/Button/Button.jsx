import styled from "styled-components";
export const Button = ({onClick, children, disabled}) => {
  return <StyledBtn onClick={onClick} disabled={disabled}>{children}</StyledBtn>;
};
//style
const StyledBtn = styled.button`
    padding: 6px;
    width: 65px;
    border-radius: 8px;
    border: 1px solid blue;
    margin-left: 0.5rem;
`