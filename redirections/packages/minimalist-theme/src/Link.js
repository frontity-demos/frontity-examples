import React from "react";
import { connect } from "frontity";

const Link = ({ href, actions, children }) => {
  return (

      <a
        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </a>

  );
};

export default connect(Link);