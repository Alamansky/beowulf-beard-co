import React from "react";
import WhiteSpace from "./styles/WhiteSpace";
import Link from "next/link";
import styled from "styled-components";
import User from "../components/User";
import AdminView from "./AdminView";

const BlogThumbnail = styled.img`
  width: 200px;
  margin-right: 4rem;
`;

const Post = styled.div`
  display: flex;
  border-bottom: ${props => `2px solid rgba(${props.theme.lightgreyRGB}, 0.5)`};
  padding: 4rem;
  transition: 0.2s ease;
  position: relative;

  &:before {
    height: 100%;
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
  }

  > img {
    filter: grayscale(100%);
  }

  &:hover {
    cursor: pointer;
    border-bottom: ${props => `2px solid ${props.theme.grey}`};

    > img {
      filter: grayscale(0%);
    }
  }
`;

const BlogPost = props => {
  const post = props.post;
  return (
    <User>
      {({ data: { me } }) => {
        return (
          <React.Fragment>
            {me && (
              <AdminView>
                <Link
                  href={{ pathname: "/updatePost", query: { id: post.id } }}
                >
                  <button>Edit</button>
                </Link>
              </AdminView>
            )}
            <Link
              href={{ pathname: "/post", query: { id: post.id } }}
              key={post.id}
            >
              <Post className="post">
                <BlogThumbnail src={post.image} />
                <div>
                  <h3>{post.title}</h3>
                  <WhiteSpace>{post.excerpt}</WhiteSpace>
                </div>
              </Post>
            </Link>
          </React.Fragment>
        );
      }}
    </User>
  );
};

export default BlogPost;
