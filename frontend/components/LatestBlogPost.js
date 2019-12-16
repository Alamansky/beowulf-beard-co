import { Query } from "react-apollo";
import gql from "graphql-tag";
import BlogPost from "./BlogPost";
import Inner from "./styles/Inner";
import Section from "./styles/Section";
import Center from "./styles/Center";
import SickButton from "./styles/SickButton";
import Link from "next/link";
import SectionTitle from "./styles/SectionTitle";

const LATEST_POST = gql`
  query LATEST_POST($last: Int = 1) {
    blogPosts(last: $last) {
      id
      title
      excerpt
      image
      largeImage
    }
  }
`;

const LatestBlogPost = props => {
  return (
    <Query query={LATEST_POST}>
      {({ data }) => (
        <Section backgroundColor="rgba(255, 255, 255, 0.8)">
          <Inner>
            <Center>
              <SectionTitle>From our Blog...</SectionTitle>
            </Center>
            {data.blogPosts && (
              <React.Fragment>
                <BlogPost post={data.blogPosts[0]} />
                <Link
                  href={{
                    pathname: "post",
                    query: { id: data.blogPosts[0].id }
                  }}
                >
                  <Center>
                    <SickButton style={{ margin: "10rem" }}>
                      See All Posts
                    </SickButton>
                  </Center>
                </Link>
              </React.Fragment>
            )}
          </Inner>
        </Section>
      )}
    </Query>
  );
};

export default LatestBlogPost;
