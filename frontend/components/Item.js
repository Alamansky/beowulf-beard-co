import React, { Component } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";
import User from "../components/User";
import SickButton from "./styles/SickButton";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <User>
        {({ data: { me } }) => (
          <ItemStyles>
            {item.image && <img src={item.image} alt={item.title} />}
            <Title>
              <Link href={{ pathname: "/item", query: { id: item.id } }}>
                <a>{item.title}</a>
              </Link>
            </Title>
            <p>{item.description}</p>
            <PriceTag>{formatMoney(item.price)}</PriceTag>
            <AddToCart button={SickButton} id={item.id} />
            <div className="buttonList">
              {me && (
                <React.Fragment>
                  <Link href={{ pathname: "/update", query: { id: item.id } }}>
                    <a>Edit</a>
                  </Link>
                  <DeleteItem id={item.id}>
                    <a>Delete this Item</a>
                  </DeleteItem>
                </React.Fragment>
              )}
            </div>
          </ItemStyles>
        )}
      </User>
    );
  }
}
