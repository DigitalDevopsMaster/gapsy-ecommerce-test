import styled from "@emotion/styled";


const StyledContainer = styled('div')`
  display: flex;
  width: 100;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'wrap'};
  max-width: ${props => props.maxWidth ? props.maxWidth + "px" : 'unset'};
  flex: ${props => props.flex || 'unset'};
  ${props => props.containerStyle === "card" && `
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
  `}

`;

const Container = ({
    children,
    className,
    align,
    justify,
    direction,
    wrap,
    containerStyle
}) => {
    return (
        <StyledContainer className={className} 
            direction={direction}
            justify={justify}
            align={align}
            containerStyle={containerStyle}
            wrap={wrap}
        >{children}</StyledContainer>
    );
}

export default Container