import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import { formatDistance } from "date-fns";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";
import Table from "./styles/Table";
import OrderFulfillmentCheck from "./OrderFulfillmentCheck";

const ORDERS_QUERY = gql`
  query ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      fulfilled
      customerName
      customerEmail
      customerAddress
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUL = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

export default class Orders extends Component {
  state = {
    unfilledOrders: 0
  };
  render() {
    return (
      <Query query={ORDERS_QUERY}>
        {({ data: { orders }, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <span>Loading...</span>;
          return (
            <div style={{ padding: "4rem" }}>
              <p>
                {`You have ${
                  orders.filter(order => !order.fulfilled).length
                } unfulfilled order(s)`}
              </p>
              <Table>
                <thead>
                  <tr>
                    <th>Fulfilled</th>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Customer Email</th>
                    <th>Address</th>
                    <th>Item(s)</th>
                    <th>Time Since Order</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td>
                        <OrderFulfillmentCheck order={order} />
                      </td>
                      <Link
                        href={{ pathname: "/order", query: { id: order.id } }}
                        key={order.id}
                      >
                        <td>
                          <a>{order.id}</a>
                        </td>
                      </Link>
                      <td>{order.customerName}</td>
                      <td>{order.customerEmail}</td>
                      <td>{order.customerAddress}</td>
                      <td>
                        {order.items.map(item => (
                          <p key={item.id}>
                            {`${item.title} (x${item.quantity} @ ${formatMoney(
                              item.price
                            )} each)\n`}
                          </p>
                        ))}
                      </td>
                      <td>{formatDistance(order.createdAt, new Date())}</td>
                      <td>{formatMoney(order.total)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          );
        }}
      </Query>
    );
  }
}

export { ORDERS_QUERY };
