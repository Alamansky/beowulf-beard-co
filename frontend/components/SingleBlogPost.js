import { Query } from "react-apollo";
import gql from "graphql-tag";
import Center from "./styles/Center";
import Inner from "./styles/Inner";
import WhiteSpace from "./styles/WhiteSpace";
import Link from "next/link";
import styled from "styled-components";

const PrevNextNav = styled.div`
  display: flex;
  border-top: ${props => `2px solid rgba(${props.theme.lightgreyRGB}, 0.5)`};

  > * {
    flex: 1;
    text-align: center;
    padding: 2rem;
  }

  > a > span:hover {
    border-bottom: 2px solid black;
  }
`;

const BlogFeaturedImage = styled.img`
  width: 100%;
`;

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    blogPost(where: { id: $id }) {
      id
      title
      post
      previous
      next
      image
      largeImage
      previousTitle
      nextTitle
    }
  }
`;

const SingleBlogPost = props => {
  return (
    <Query query={SINGLE_POST_QUERY} variables={{ id: props.id }}>
      {({ data: { blogPost } }) => (
        <Inner>
          <article>
            <BlogFeaturedImage src={blogPost.largeImage} />
            <h2>{blogPost.title}</h2>
            <WhiteSpace>{blogPost.post}</WhiteSpace>
          </article>
          <PrevNextNav>
            {blogPost.previous && (
              <Link
                href={{ pathname: "/post", query: { id: blogPost.previous } }}
              >
                <a>
                  <span>{"<<  " + blogPost.previousTitle}</span>
                </a>
              </Link>
            )}

            {blogPost.next && (
              <Link href={{ pathname: "/post", query: { id: blogPost.next } }}>
                <a>
                  <span>{blogPost.nextTitle + "  >>"}</span>
                </a>
              </Link>
            )}
          </PrevNextNav>
        </Inner>
      )}
    </Query>
  );
};

export default SingleBlogPost;
