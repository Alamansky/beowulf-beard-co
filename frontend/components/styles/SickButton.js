import styled from "styled-components";

const SickButton = styled.button`
  background: ${props =>
    props.backgroundColor
      ? `rgba(${props.backgroundColor}, 1)`
      : props.theme.black};
  color: ${props => props.theme.offWhite};
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 3rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: ${props =>
      props.backgroundColor
        ? `rgba(${props.backgroundColor}, 0.6)`
        : `rgba(${props.theme.blackRGB}, 0.6)`};
    cursor: pointer;
  }
`;

export default SickButton;
