import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Container } from "./";

const StyledSearchBar = styled(Container)`
  padding: 0 16px;
  gap: 8px;
  position: relative; /* Necesario para el posicionamiento absoluto del icono */
`;

const StyledInput = styled('input')`
  display: flex;
  padding: 8px;
  padding-right: 30px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px; /* Bordes redondeados */
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
  color: #333333;
  width: 100%; /* Asegúrate de que el input ocupe todo el ancho disponible */
  
  &:focus-within {
    border-color: #007bff; /* Cambia el color del borde al enfocar */
  }
`;

const IconContainer = styled(Container)`
  align-items: center;
  position: absolute; /* Posiciona el ícono sobre el input */
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer; /* Cambia el cursor al pasar sobre el ícono */
`;

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  // Maneja el cambio en el input
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    
    // Limpia el timeout previo
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    // Configura un nuevo timeout
    const id = setTimeout(() => {
      handleSearch()
    }, 2000);
    
    setTimeoutId(id);
  };

  // Maneja el blur en el input
  const handleSearch = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      onSearch(query)
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <StyledSearchBar>
      <StyledInput
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <IconContainer onClick={handleSearch}>
        🔍
      </IconContainer>
    </StyledSearchBar>
  );
}

export default SearchBar;
