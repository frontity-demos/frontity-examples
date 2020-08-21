import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ artist, link, title, content, featuredMediaId, year }) => {
  
  return (
    <article>
      <Link link={link}>
        <Title>{title} [{year}]</Title>
        <SubTitle>{artist}</SubTitle>
      </Link>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {featuredMediaId && (
        <FeaturedMedia id={featuredMediaId} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {content && (
        <Excerpt dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 2rem;
  color: #403D39;
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #EB5E28;
  margin: 0;
  padding-bottom: 8px;
  box-sizing: border-box;
`;


const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
