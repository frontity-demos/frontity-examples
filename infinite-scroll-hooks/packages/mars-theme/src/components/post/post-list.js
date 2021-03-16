import { usePostTypeInfiniteScroll } from "@frontity/hooks";
import { connect, styled } from "frontity";
import React, { useEffect } from "react";
import Loading from "../loading";
import Post from "./post";

const PostList = ({ actions }) => {
  const {
    posts,
    isLimit,
    isFetching,
    isError,
    fetchNext
  } = usePostTypeInfiniteScroll({ limit: 3 });

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, []);

  return (
    <div>
      {posts.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <Post link={link} />
          {!isLast && <hr />}
        </Wrapper>
      ))}
      <Container>
        {isFetching && <Loading />}
        {(isLimit || isError) && (
          <Button onClick={fetchNext}>
            {isError ? "Something failed - Retry" : "Load More"}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default connect(PostList);

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  position: relative;
  background: #1f38c5;
  color: white;
  padding: 12px;
  font-weight: bold;
  border: none;
`;
