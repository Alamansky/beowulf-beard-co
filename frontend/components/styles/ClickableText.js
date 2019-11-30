import styled from "styled-components";

const ClickableText = styled.p`
  text-decoration: underline;
  /* text-shadow: ${props => `2px 2px 5px ${props.theme.black}`}; */
  color: ${props =>
    `rgba(${
      props.mode === "dark" ? props.theme.greyRGB : props.theme.offWhiteRGB
    }, 1)`};
  cursor: pointer;
  &:hover {
    color: ${props =>
      `rgba(${
        props.mode === "dark" ? props.theme.greyRGB : props.theme.offWhiteRGB
      }, 0.5)`};
  }
`;

export default ClickableText;
