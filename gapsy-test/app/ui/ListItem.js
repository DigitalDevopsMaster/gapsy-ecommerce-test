import styled from "@emotion/styled";
import Image from "next/image";
import {Container, Text} from "./";

const StyledListItem = styled(Container)`
  flex-direction: column;
  position: relative;
  min-width: 250px;
  flex: 1;
  border: 2px solid #eaeaea;
  transition: all 0.3s ease; /* Añade transición para la animación */
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0,0.15);
    transform: scale(1.03); /* Ajusta el valor según lo que necesites para el efecto de crecimiento */
    border: 2px solid transparent;
  }
`;

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
const TextContainer = styled(Container)`
  padding: 8px;
  gap: 8px;
`;
// {data.image}

const getCurrenctFormat = (unformattedNumber, noDigits) => {
  let formatterNumber = "$0"
  if (noDigits) {
      formatterNumber = Number(unformattedNumber).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
      return formatterNumber
  }
  formatterNumber = Number(unformattedNumber).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return formatterNumber
}

const ListItem = ({data}) => {
  const src = data.imageInfo?.thumbnailUrl || "https://placehold.co/400"
  const alt = data.imageInfo?.name || data.name
  return (
    <StyledListItem containerStyle="card">
      <ImageContainer>
        <StyledImage src={src} alt={alt} layout="fill" />
      </ImageContainer>
      <TextContainer>
        <Text TextType="h1">{getCurrenctFormat(data.price)}</Text>
        <Text TextType="h3" ellipsis={2}>{data.name} </Text>
        <Text>{data.description || data.name}</Text>
      </TextContainer>
    
    

    
    
    {/* thumbnailUrl */}
    {/* name */}


    </StyledListItem>
  );
}

export default ListItem