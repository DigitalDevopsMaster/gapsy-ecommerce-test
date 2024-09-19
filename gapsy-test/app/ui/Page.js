import styled from "@emotion/styled";
import {Container} from "./";

const StyledPage = styled(Container)`
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
  padding: 32px;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const Layout = styled(Container)`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  background: #f5f5f5;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap;
  overflow: hidden;

`

const Page = ({children, className}) => {
  return (
    <StyledPage className={className}>
      <Layout containerStyle="card">
        {children}
      </Layout>
    </StyledPage>
  );
}

export default Page