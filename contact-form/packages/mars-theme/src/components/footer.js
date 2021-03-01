/**
 * Create the Footer component and get
 * the contact page content
 */

import React from "react";
import { connect, styled } from "frontity";

const Footer = ({ state, libraries }) => {
  const data = state.source.get("/contact-form");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <ContactForm>
        <Html2React html={contactForm.content.rendered} />
      </ContactForm>
    </>
  );
};

export default connect(Footer);

const ContactForm = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.8em;
`;
