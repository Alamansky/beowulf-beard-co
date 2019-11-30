import React, { Component } from "react";
import Center from "./styles/Center";
import ClickableText from "./styles/ClickableText";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_ADMIN_EMAIL = gql`
  query GET_ADMIN_EMAIL {
    adminEmail {
      someString
    }
  }
`;

export default class Contact extends Component {
  state = {
    showEmail: false
  };
  render() {
    return (
      <Query query={GET_ADMIN_EMAIL}>
        {({ data, loading, error }) => {
          return (
            <Center style={{ margin: "15rem" }} id="contact">
              <ClickableText onClick={() => this.setState({ showEmail: true })}>
                {this.state.showEmail
                  ? error
                    ? "Houston, we have an error"
                    : data.adminEmail.someString
                  : "Got questions?"}
              </ClickableText>
            </Center>
          );
        }}
      </Query>
    );
  }
}
