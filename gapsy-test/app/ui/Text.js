import styled from "@emotion/styled";


const StyledText = styled('p')`
  flex-direction: ${props => props.color || '#333333'};
  font-size: 16px;
`;

const StyledHeading1 = styled('h1')`
  flex-direction: ${props => props.color || '#333333'};
  font-size: 32px;
`;

const StyledHeading3 = styled('h3')`
  flex-direction: ${props => props.color || '#333333'};
  font-size: 18px;
`;

const Text = ({
  children,
  className,
  color,
  TextType = "p"
}) => {
  switch (TextType) {
    case "p":
      return <StyledText className={className} color={color}>{children}</StyledText>;
    case "h1":
      return <StyledHeading1 className={className} color={color}>{children}</StyledHeading1>;
    case "h2":
    case "h3":
      return <StyledHeading3 className={className} color={color}>{children}</StyledHeading3>;
    case "h4":
    case "h5":
    case "span":
    default:
      return <StyledText className={className} color={color}>{children}</StyledText>;
  }
}

export default Text