import React, { useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";

import { CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'

import { Button } from 'reactstrap';
import Example from './Example'
import bootstrapGlobalStyles from 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  
  const myCache = createCache()
  myCache.compat = true

  return (
      <CacheProvider value={myCache}>
        
        {/* Add some metatags to the <head> of the HTML. */}
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>

        {/* Add some global styles for the whole site, like body or a's. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={bootstrapGlobalStyles} />
        <Global styles={globalStyles} />

        <HeaderMainPage>-- Demo Bootstrap + Frontity --</HeaderMainPage>

        <div style={{ width: 400, margin: '0 auto' }}>
          <h2>Data from State</h2>
          <p>Site Description: <em>{state.frontity.description}</em></p>
          <p>Site Title: <em>{state.frontity.title}</em></p>
          <p>Some Post Link: <em>{state.source.post["26"].link}</em></p>
          <p>Some Post Title: <em>{state.source.post["26"].title.rendered}</em></p>
          
          <h2>Reactstrap (Bootstrap) Component</h2>
          <Example />
        </div>

      
      </CacheProvider>
    
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeaderMainPage = styled.h1`
  font-size: 40px;
  font-style: italic;
  width: 400;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
