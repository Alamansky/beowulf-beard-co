import styled from "styled-components";

const OuterBorder = styled.span`
  border: 2px solid ${props => `rgba(${props.theme.offWhiteRGB}, 0.5)`};
`;

export default OuterBorder;
