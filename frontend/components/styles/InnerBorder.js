import styled from "styled-components";

const InnerBorder = styled.span`
  outline: 2px solid ${props => `rgba(${props.theme.offWhiteRGB}, 0.5)`};
  outline-offset: -30px;
  padding: 4rem 6rem;
`;

export default InnerBorder;
