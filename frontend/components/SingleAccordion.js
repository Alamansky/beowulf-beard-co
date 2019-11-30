import React, { Component } from "react";
import styled from "styled-components";
import { propType } from "graphql-anywhere";
import SickButton from "./styles/SickButton";
import { theme } from "./Page";

const AccordianBox = styled.div`
  width: 100%;
  height: ${props => (props.open ? "auto" : "60px")};
  border: ${props =>
    props.open ? `2px solid ${props.theme.lightgrey}` : "none"};
  position: relative;
  overflow: hidden;
`;

export default class SingleAccordion extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <AccordianBox open={this.state.open}>
        <SickButton
          backgroundColor={theme.greenRGB}
          onClick={() => this.setState({ open: !this.state.open })}
          open={this.state.open}
        >
          {this.state.open
            ? this.props.buttonText[1]
            : this.props.buttonText[0]}
        </SickButton>
        {this.props.children}
      </AccordianBox>
    );
  }
}
