import styled from "@emotion/styled";

const StyledMenuButton = styled('button')`
  border: none;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: rgba(0,0,0,0.15);
  color: black;
  font-size: 24px;
  display: flex;
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease-in-out all .3s;
  &:hover {
    background: rgba(0,0,0,0.35);
  }
`


const MenuButton = ({children}) => {
  return (
    <StyledMenuButton>⋮</StyledMenuButton>
  );
}

export default MenuButton