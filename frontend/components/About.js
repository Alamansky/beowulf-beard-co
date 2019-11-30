import styled from "styled-components";
import AboutCopy from "./copy/AboutCopy";

const AboutSection = styled.section`
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  min-height: 50rem;
  background-image: url("https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: border-box;
  background-position-x: -50rem;

  @media (max-width: 768px) {
    background-position-x: 0;
  }
`;

const AboutText = styled.div`
  background-color: ${props => props.theme.grey};
  color: ${props => props.theme.offWhite};
  padding: 4rem 6rem;
  position: relative;
  width: 50%;
  transition: 0.5s ease;
  outline: 2px solid ${props => `rgba(${props.theme.offWhiteRGB}, 0.5)`};
  outline-offset: -30px;

  @media (max-width: 768px) {
    width: 100%;
    opacity: 0.8;
  }
`;

const About = () => (
  <AboutSection id="about">
    <AboutText>
      <AboutCopy />
    </AboutText>
  </AboutSection>
);

export default About;
