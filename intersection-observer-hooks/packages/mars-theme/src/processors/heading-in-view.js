import React, {useEffect} from 'react'
import useInView from "@frontity/hooks/use-in-view";

const WithInViewHeading = (children, headingTagName) => {  
  const childrenContent = children[0].content
  const InnerComponent = () => {
    const { ref, inView } = useInView();
    useEffect(() => {
      if (inView) console.log(`${+new Date()} → Heading In View: ${childrenContent}`)
    });
    
    return React.createElement(headingTagName, {ref}, childrenContent) 
  }
  return InnerComponent
}

const HeadingInView = {
  priority: 10,
  name: "h3-in-view",
  test: ({ node }) => (
    node.component === "h2" || node.component === "h3" || node.component === "h4" && node.children.length
  ),
  processor: ({ node, state }) => {
    node.component = WithInViewHeading(node.children, node.component)
    return node
  },
};

export default HeadingInView;
