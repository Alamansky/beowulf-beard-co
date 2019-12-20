import Router from "next/router";
import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import TextArea from "./styles/TextArea";

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    blogPost(where: { id: $id }) {
      id
      title
      post
    }
  }
`;

const UPDATE_POST_MUTATION = gql`
  mutation UPDATE_POST_MUTATION($id: ID!, $title: String, $post: String) {
    updateBlogPost(id: $id, title: $title, post: $post) {
      id
      title
      post
      image
    }
  }
`;

class updatePost extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateBlogPost = async (e, updateBlogPostMutation) => {
    e.preventDefault();
    const res = await updateBlogPostMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    Router.push({
      pathname: "/post",
      query: { id: this.props.id }
    });
  };

  render() {
    return (
      <Query query={SINGLE_POST_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (!data.blogPost)
            return <p>No blog post found for ID {this.props.id}</p>;
          return (
            <Mutation mutation={UPDATE_POST_MUTATION} variables={this.state}>
              {(updateBlogPost, { loading, error }) => (
                <Form onSubmit={e => this.updateBlogPost(e, updateBlogPost)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">
                      title
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.blogPost.title}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label htmlFor="post">
                      description
                      <TextArea
                        type="text"
                        id="post"
                        name="post"
                        placeholder="post body"
                        required
                        defaultValue={data.blogPost.post}
                        onChange={this.handleChange}
                      />
                    </label>
                    <button type="submit">
                      Sav{loading ? "ing" : "e"} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default updatePost;
