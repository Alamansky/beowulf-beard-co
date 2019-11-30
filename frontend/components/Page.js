import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Meta from "../components/Meta";
import trimSVGElements from "../lib/trimSVGElements";
import Footer from "../components/Footer";

const theme = {
  red: "#FF0000",
  redRGB: "255,0,0",
  green: "#00CC00",
  greenRGB: "0,204,0",
  black: "#393939",
  blackRGB: "57,57,57",
  grey: "#3A3A3A",
  greyRGB: "58,58,58",
  lightgrey: "#E1E1E1",
  lightgreyRGB: "225,225,225",
  offWhite: "#EDEDED",
  offWhiteRGB: "237,237,237",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  textShadow: "2px 2px 5px #393939"
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  /* corrects overflow */
  overflow: hidden;
  max-width: 100vw;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
}
    html {
        box-sizing: border-box;
        font-size: 10px;
        scroll-behavior: smooth;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next', serif;
    }
    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

export default class Page extends Component {
  componentDidMount() {
    trimSVGElements();
  }

  render() {
    const fullWidthPages = ["/", "/orders"];
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledPage>
          <Meta></Meta>
          <Header></Header>
          {fullWidthPages.includes(this.props.page) ? (
            this.props.children
          ) : (
            <Inner>{this.props.children}</Inner>
          )}
        </StyledPage>
        <Footer />
      </ThemeProvider>
    );
  }
}

export { theme };
