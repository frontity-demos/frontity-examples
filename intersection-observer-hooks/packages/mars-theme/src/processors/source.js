const source = {
  priority: 100,
  name: "source",
  test: ({ node }) => 
    node.component === "p" && 
    node.children[0]?.content?.startsWith("Source:") &&
    node.children[1]?.props?.href?.includes("wikipedia"),
  processor: ({ node, state }) => {
    const linkWikipediaSrc = node.children[1].props.href
    const {isPost, id} = state.source.get(state.router.link);
    if (isPost) {
      state.source.post[id].sourcePost = linkWikipediaSrc
    }
    return node
  },
};

export default source;
