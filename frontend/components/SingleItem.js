import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import AddToCart from "./AddToCart";
import Center from "./styles/Center";
import SickButton from "./styles/SickButton";
import formatMoney from "../lib/formatMoney";
import SuggestedItems from "./SuggestedItems";
import PriceTag from "./styles/PriceTag";

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;

  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
  }

  img {
    width: 100%;
    align-self: center;
    padding: 2rem;
  }
  .details {
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    margin: 3rem;
    padding: 3rem;
    font-size: 2rem;
    border-left: ${props => `2px solid rgba(${props.theme.lightgreyRGB}, 0.5)`};
  }
`;

const SINGLE_ITEM_VIEW_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      largeImage
    }
  }
`;

export default class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_VIEW_QUERY} variables={{ id: this.props.id }}>
        {({
          error,
          loading,
          data: {
            item,
            item: { id, title, price, description, largeImage }
          }
        }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading</p>;
          if (!item) return <p>No Item found for {this.props.id}</p>;
          return (
            <React.Fragment>
              <SingleItemStyles>
                <Head>
                  <title>Sick Fits | {title}</title>
                </Head>
                <img src={largeImage} alt={title} />
                <div className="details">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <Center>
                    <PriceTag>{formatMoney(price)}</PriceTag>
                  </Center>
                  <Center style={{ alignSelf: "center" }}>
                    <AddToCart id={id} button={SickButton}></AddToCart>
                  </Center>
                </div>
              </SingleItemStyles>
              <SuggestedItems id={this.props.id} />
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}
