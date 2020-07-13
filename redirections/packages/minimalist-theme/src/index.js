import React from "react";
import Root from "./Root";

export default {
  name: "minimalist-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        console.log("⚙︎ initializing theme...");
        libraries.source.redirections.push({
          name: "categories",
          priority: 10,
          pattern: `/category/:cat`,
          func: ({cat}) => {
            console.log(`☝️ category ${cat} detected!`)
            console.log(`✈ redirecting...`)
            return '/'
          }
        });
      },
    },
  },
};
