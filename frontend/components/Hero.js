import React, { Component } from "react";
import styled from "styled-components";
import Center from "./styles/Center";
import env from "../env.json";

const HeroSpacer = styled.div`
  height: 80vh;
  width: 100vw;
`;

const HeroImage = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroText = styled.h1`
  margin-top: 60vh;
  position: relative;
  color: ${props => props.theme.offWhite};
  mix-blend-mode: screen;
`;

export default class Hero extends Component {
  state = {
    _window: false,
    scroll: 0
  };

  componentDidMount() {
    this.setState({ _window: true });
    window.addEventListener("scroll", () => this.handle());
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handle());
  }

  handle = () => {
    const hasWindow = window || null;
    hasWindow && this.setState({ scroll: window.scrollY });
  };

  render() {
    return (
      <HeroSpacer>
        <HeroImage image={env.heroImage}>
          <Center>
            <HeroText
              id="hero-text"
              style={{
                transform: `translateY(calc(-${this.state.scroll}rem / 10))`,
                letterSpacing: `calc(${this.state.scroll}px / 50)`
              }}
            >
              Some Tagline Here
            </HeroText>
          </Center>
        </HeroImage>
      </HeroSpacer>
    );
  }
}
