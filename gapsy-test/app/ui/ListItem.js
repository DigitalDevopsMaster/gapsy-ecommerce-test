import styled from "@emotion/styled";
import Image from "next/image";
import {Container, Text} from "./";

const StyledListItem = styled(Container)`
  flex-direction: column;
  position: relative;
  min-width: 250px;
  flex: 1;
  border: 1px solid red;
`

const StyledImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%; 
  object-fit: contain; 
`;
const ImageContainer = styled(Container)`
  height: 150px; 
  position: relative;
`;
// {data.image}
const ListItem = ({data}) => {
  console.log({data});
  const src = data.imageInfo?.thumbnailUrl || "https://placehold.co/400"
  const alt = data.imageInfo?.name || data.name
  return (
    <StyledListItem containerStyle="card">
      <ImageContainer>
        <StyledImage src={src} alt={alt} layout="fill" />
      </ImageContainer>
      <Text>{data.name}</Text>
      <Text>{data.price}</Text>
      <Text>{data.description}</Text>
    
    
    

    
    
    {/* thumbnailUrl */}
    {/* name */}


    </StyledListItem>
  );
}

export default ListItem