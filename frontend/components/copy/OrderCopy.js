import React from "react";

function OrderCopy(order) {
  return (
    <p>
      {`Thank you for your order, ${props.order.customerName}! A confirmation email has
      been sent to ${props.order.customerEmail}. You will recieve a follow-up email
      when the below items are shipped to ${props.order.customerAddress}.`}
    </p>
  );
}

export default OrderCopy;
