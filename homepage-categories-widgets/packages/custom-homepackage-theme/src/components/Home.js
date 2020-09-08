import React, {useEffect} from "react";
import { connect, styled } from "frontity";
import {getPostsGroupedByCategory} from '../helpers'
import Link from "@frontity/components/link";

const Home = ({ state, actions, libraries }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategory(state.source)
  console.log(postsPerCategory)
  const Html2React = libraries.html2react.Component; 

  return (
    <>
      <FlexContainer>
        <Container>
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index}>
                <Heading>{category.name}</Heading>
                {posts.map((post, index) => (
                  <article key={index}>
                    <div>
                      
                        <div px={2}>
                          <Link link={post.link}>
                            <h2>
                              <Html2React html={post.title.rendered} />
                            </h2>
                          </Link>
                          <Html2React html={post.excerpt.rendered} />
                        </div>
                      
                    </div>
                  </article>
                  ))}
                <Link link={category.link}>
                  <p>&gt;&gt; See more posts at <strong>{category.name}</strong></p>
                </Link>
            </BoxCategory>
          ))
        }
        </Container>
        <Sidebar>
            <p>Sidebar</p>
        </Sidebar>
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  background-color: #fff;
  color: #444;  
`

const Heading = styled.h2`
  font-size: 50px;
  background-color: yellow;
  padding: 5px;

`

const BoxCategory = styled.div`
  border-radius: 5px;
  padding: 20px;
  border: 4px solid #000;
`

const Sidebar = styled.aside`
  border: 4px solid red;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  width: 300px;
`

export default connect(Home);