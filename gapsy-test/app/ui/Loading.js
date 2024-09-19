import styled from "@emotion/styled";
import {Container, Text} from "./";


const StyledLoading = styled(Container)`
  display: flex;
  width: 100;
  align-items: center;
  justify-content: center;
  height:100%; 
`;

const Loading = ({
    className,
}) => {
    return (
        <StyledLoading className={className}>
          <Text TextType="h1" >LOADING</Text>
        </StyledLoading>
    );
}

export default Loading