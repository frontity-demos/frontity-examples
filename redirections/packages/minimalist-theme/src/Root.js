import React from "react";
import { connect } from "frontity";
import Link from "./Link";

const Root = ({ state }) => {
  return (
    <>
      <h1>Frontity DEMO Examples - redirections</h1>
      <p>Estamos en {state.router.link}</p>
      <nav>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/category/nature">Nature</Link></li>
          <li><Link href="/category/travel">Travel</Link></li>
          <li><Link href="/category/news">News</Link> <small>should redirect to Nature</small></li>
        </ul>
      </nav>
    </>
  );
};

export default connect(Root);