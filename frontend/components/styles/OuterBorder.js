import styled from "styled-components";

const OuterBorder = styled.div`
  border: 2px solid ${props => `rgba(${props.theme.offWhiteRGB}, 0.5)`};
  padding: 2rem;
`;

export default OuterBorder;
