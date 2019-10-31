import Order from "../components/Order";

const orderPage = props => (
  <div>
    <Order id={props.query.id}></Order>
  </div>
);

export default orderPage;
