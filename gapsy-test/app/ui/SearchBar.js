import styled from "@emotion/styled";

const StyledSearchBar = styled('div')`
  border: 1px red solid;
`

const SearchBar = ({children}) => {
  return (
    <StyledSearchBar>{children}</StyledSearchBar>
  );
}

export default SearchBar