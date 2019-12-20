import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { BLOGPOSTS } from "../components/BlogPosts";
import SingleAccordion from "./SingleAccordion";
import Form from "./styles/Form";
import AdminView from "./AdminView";
import TextArea from "./styles/TextArea";

const CREATE_BLOGPOST = gql`
  mutation CREATE_BLOGPOST(
    $title: String!
    $post: String!
    $image: String!
    $largeImage: String!
  ) {
    createBlogPost(
      title: $title
      post: $post
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

export default class CreateBlogPost extends Component {
  state = {
    title: "",
    post: "",
    image: "",
    largeImage: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    this.setState({ [name]: value });
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
        <Mutation
          mutation={CREATE_BLOGPOST}
          variables={this.state}
          refetchQueries={[{ query: BLOGPOSTS }]}
        >
          {(createBlogPost, { error, loading }) => {
            return (
              <SingleAccordion buttonText={["New Post", "Hide Form"]}>
                <div className="newBlogPost">
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      const res = await createBlogPost();
                      this.setState({ title: "", post: "" });
                    }}
                  >
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="title">
                        <h3>Title</h3>
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
                      <label htmlFor="post">
                        <h3>Post</h3>
                        <TextArea
                          type="textarea"
                          id="post"
                          name="post"
                          placeholder="Post"
                          required
                          value={this.state.post}
                          onChange={this.handleChange}
                        />
                      </label>
                      <button type="submit">Submit</button>
                    </fieldset>
                  </Form>
                </div>
              </SingleAccordion>
            );
          }}
        </Mutation>
      </AdminView>
    );
  }
}
