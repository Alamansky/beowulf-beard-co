import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import WhiteSpace from "./styles/WhiteSpace";
import BlogPost from "./BlogPost";

const BLOGPOSTS = gql`
  query BLOGPOSTS {
    blogPosts(orderBy: id_DESC) {
      id
      title
      excerpt
      post
      image
      largeImage
    }
  }
`;

const BlogPosts = () => {
  return (
    <Query query={BLOGPOSTS}>
      {({ data }) =>
        data.blogPosts.map(post => <BlogPost post={post} key={post.id} />)
      }
    </Query>
  );
};

export default BlogPosts;

export { BLOGPOSTS };
