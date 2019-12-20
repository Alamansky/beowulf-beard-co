import Router from "next/router";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import SingleAccordian from "./SingleAccordion";
import AdminView from "./AdminView";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class createItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "beowulf");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhjyd95yq/image/upload",
      { method: "POST", body: data }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    return (
      <AdminView>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <SingleAccordian buttonText={["+ New Item", "- Hide Form"]}>
              <Form
                onSubmit={async e => {
                  //call mutation
                  const res = await createItem();
                  Router.push({
                    pathname: "/item",
                    query: { id: res.data.createItem.id }
                  });
                }}
              >
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="file">
                    Image
                    <input
                      type="file"
                      id="file"
                      name="file"
                      placeholder="Upload an image"
                      required
                      onChange={this.uploadFile}
                    />
                    {this.state.image && (
                      <img
                        width="200"
                        src={this.state.image}
                        alt="Upload Preview"
                      />
                    )}
                  </label>
                  <label htmlFor="title">
                    title
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      required
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="price">
                    price
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      required
                      value={this.state.price}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label htmlFor="description">
                    description
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter a description"
                      required
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </fieldset>
              </Form>
            </SingleAccordian>
          )}
        </Mutation>
      </AdminView>
    );
  }
}

export default createItem;
export { CREATE_ITEM_MUTATION };
