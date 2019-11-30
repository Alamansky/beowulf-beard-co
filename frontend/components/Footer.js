import React from "react";
import styled from "styled-components";

const FooterElement = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.grey};
  color: ${props => `rgba(${props.theme.offWhiteRGB}, 0.5)`};
  margin-top: 4rem;

  > * {
    padding: 4rem;
  }
`;

const Footer = () => {
  return (
    <FooterElement>
      <p> &copy; Beowulf Beard Company {new Date().getFullYear()}</p>
      <p>Site by Andrew Lamansky</p>
    </FooterElement>
  );
};

export default Footer;
