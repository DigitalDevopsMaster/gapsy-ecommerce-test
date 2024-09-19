import styled from "@emotion/styled";
import {ListItem, Container} from "./";

const StyledProductList = styled(Container)`
  gap: 16px;
  padding: 16px;
  flex: 1;
  height: calc(100% - 106px);
  position: relative;
`

const Scroller = styled(Container)`
  overflow: scroll;
  max-height: 100%;
`

const ProductList = ({data}) => {
  return (
    <StyledProductList>
      <Scroller>
        { data.map((item) => <ListItem key={item.id} data={item}/>) }
      </Scroller>
    </StyledProductList>
  );
}

export default ProductList