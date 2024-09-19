import styled from "@emotion/styled";
import {Container, Text} from ".";

const StyledFetching = styled(Container)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%; 
  flex-direction: column; /* Para centrar el texto y el ícono verticalmente */
`;

const Spinner = styled('div')`
  border: 4px solid rgba(0, 0, 0, 0.1); /* Fondo del spinner */
  border-radius: 50%;
  border-top: 4px solid #007bff; /* Color del spinner */
  width: 40px;
  height: 40px;
  animation: rotatingAnimation 1s linear infinite; /* Rotación infinita */

  @keyframes rotatingAnimation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
const Fetching = ({
    className,
}) => {
    return (
        <StyledFetching className={className}>
          <Text TextType="h1" >Fetching</Text>
        <Spinner/>
        </StyledFetching>
    );
}

export default Fetching