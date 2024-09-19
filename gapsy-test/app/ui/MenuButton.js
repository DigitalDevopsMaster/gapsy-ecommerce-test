import styled from "@emotion/styled";

const StyledMenuButton = styled('button')`
  border: 1px red solid;
`

const MenuButton = ({children}) => {
  return (
    <StyledMenuButton>menu</StyledMenuButton>
  );
}

export default MenuButton