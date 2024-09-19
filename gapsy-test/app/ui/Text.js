import styled from "@emotion/styled";


const StyledText = styled('p')`
  color: ${props => props.color || '#333333'};
  font-size: 14px;
   display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ ellipsis }) =>
    ellipsis &&
    `
      -webkit-line-clamp: ${ellipsis};
    `}
`;

const StyledHeading1 = styled('h1')`
  color: ${props => props.color || '#333333'};
  font-size: 24px;
   display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ ellipsis }) =>
    ellipsis &&
    `
      -webkit-line-clamp: ${ellipsis};
    `}
`;

const StyledHeading3 = styled('h3')`
  color: ${props => props.color || '#333333'};
  font-size: 16px;
   display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ ellipsis }) =>
    ellipsis &&
    `
      -webkit-line-clamp: ${ellipsis};
    `}
`;

const Text = ({
  children,
  className,
  color,
  ellipsis,
  TextType = "p"
}) => {
  switch (TextType) {
    case "p":
      return <StyledText className={className} ellipsis={ellipsis} color={color}>{children}</StyledText>;
    case "h1":
      return <StyledHeading1 className={className} ellipsis={ellipsis} color={color}>{children}</StyledHeading1>;
    case "h2":
    case "h3":
      return <StyledHeading3 className={className} ellipsis={ellipsis} color={color}>{children}</StyledHeading3>;
    case "h4":
    case "h5":
    case "span":
    default:
      return <StyledText className={className} ellipsis={ellipsis} color={color}>{children}</StyledText>;
  }
}

export default Text