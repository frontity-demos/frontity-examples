import React from "react";
import Iframe from "@frontity/components/iframe";

const source = {
  priority: 100,
  name: "source",
  test: ({ node }) =>
    node.component === "p" &&
    node.children[0]?.content?.startsWith("Source:") &&
    node.children[1]?.props?.href?.includes("wikipedia"),
  processor: ({ node, state }) => {
    const linkWikipediaSrc = node.children[1].props.href;
    const { isPost } = state.source.get(state.router.link);
    if (isPost) {
      node.component = () => <Iframe src={linkWikipediaSrc} height="500" width="100%" />
    }
    return node;
  },
};

export default source;
