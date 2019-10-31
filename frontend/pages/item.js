import SingleItem from "../components/SingleItem";

const item = ({ query }) => (
  <div>
    <SingleItem id={query.id}></SingleItem>
  </div>
);

export default item;
