import styled from "@emotion/styled";
import {Container, MenuButton } from "./";
import Logo from "../public/logo.png"
import Image from 'next/image';

const StyledHeader = styled(Container)`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;;
`

const Title = styled('h1')`
    color: #333333;
`


const Header = () => {
  return (
    <StyledHeader>
      <Container align="center">
        <Image src={Logo} alt="Gapsi Logo" /> {/* Usa el componente Image */}
        <Title>e-Commerce Gapsi</Title> 
      </Container>
      <MenuButton>
      </MenuButton>

    </StyledHeader>
  );
}

export default Header