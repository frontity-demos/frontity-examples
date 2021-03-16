import { useArchiveInfiniteScroll } from "@frontity/hooks";
import { connect, styled } from "frontity";
import React from "react";
import Loading from "../loading";
import ListPage from "./list-page";

const List = () => {
  const {
    pages,
    isLimit,
    isFetching,
    isError,
    fetchNext
  } = useArchiveInfiniteScroll({ limit: 3 });

  return (
    <>
      {pages.map(({ key, link, isLast, Wrapper }) => (
        <Wrapper key={key}>
          <ListPage link={link} />
          {!isLast && <hr />}
        </Wrapper>
      ))}
      <ButtonContainer>
        {isFetching && <Loading />}
        {isLimit && <Button onClick={fetchNext}>Load Next Page</Button>}
        {isError && (
          <Button onClick={fetchNext}>Something failed - Retry</Button>
        )}
      </ButtonContainer>
    </>
  );
};

export default connect(List);
const ButtonContainer = styled.div`
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
