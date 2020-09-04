import React from "react";
import { connect, Global, css } from "frontity";
import Home from './Home'
import Link from "@frontity/components/link";

const Root = ({ state }) => {

  const data = state.source.get(state.router.link)
  return (
    <>
      <Global
        styles={css`
          body {
            padding: 0;
            margin: 0;
          }
        `}
      />
      
      <div>
        {data.isHome && <Home />}
        {!data.isHome && (
          <div>
            <p>You're at <em>{state.router.link}</em></p>
            <Link link='/'>&lt; Back to Home</Link>
          </div>
          )}
      </div>
    </>
  );
};

export default connect(Root);