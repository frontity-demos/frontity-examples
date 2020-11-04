import React from "react";
import { connect, styled, Head } from "frontity";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {


  return (
      <>
        
        {/* Add some metatags to the <head> of the HTML. */}
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
          <script>{`alert("Hello from script tag in header")`}</script>
        </Head>


        <HeaderMainPage>-- Demo Script Head + Frontity --</HeaderMainPage>

        <div style={{ width: 400, margin: '0 auto' }}>
          <h2>Data from State</h2>
          <p>Site Description: <em>{state.frontity.description}</em></p>
          <p>Site Title: <em>{state.frontity.title}</em></p>
          <p>Some Post Link: <em>{state.source.post["26"].link}</em></p>
          <p>Some Post Title: <em>{state.source.post["26"].title.rendered}</em></p>
          

          <h2>Demo Scripy Head</h2>
          <em>An alert should have appeared</em>
        
        </div>

      
      </>
    
  );
};

export default connect(Theme);

const HeaderMainPage = styled.h1`
  font-size: 40px;
  font-style: italic;
  width: 400;
  text-align: center;
  padding: 10px;
  margin-top: 60px;
`;

