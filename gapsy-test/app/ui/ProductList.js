import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Container, SearchBar, Fetching, ListItem } from "./";

const StyledProductList = styled(Container)`
  padding: 16px;
  flex: 1;
  height: calc(100% - 106px);
  position: relative;
  flex-direction: column;
`;

const Scroller = styled(Container)`
  gap: 16px;
  overflow-y: auto; /* Scroll en eje Y */
  max-height: 100%;
  padding: 16px;
  flex: 1;
`;

const ProductList = ({ data, onSearch, onEndReached, nextPage }) => {
  const scrollerRef = useRef(null);

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const { scrollTop, scrollHeight, clientHeight } = scroller;
      if (scrollTop + clientHeight >= scrollHeight) {
        onEndReached();
      }
    }
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.addEventListener('scroll', handleScroll);
      return () => scroller.removeEventListener('scroll', handleScroll); // Cleanup
    }
  }, []);

  return (
    <StyledProductList>
      <SearchBar onSearch={onSearch} />
      <Scroller ref={scrollerRef}>
        {data.length ? (
          <>
          {
            data.map((item) => (
              <ListItem key={item.id + Math.random()} data={item} />
            ))

          }
          <button onClick={nextPage}>nextpage</button>
          </>
        ) : (
          <Fetching />
        )}
      </Scroller>
    </StyledProductList>
  );
};

export default ProductList;
