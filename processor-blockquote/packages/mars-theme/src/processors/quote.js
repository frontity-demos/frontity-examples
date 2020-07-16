import React from 'react'

const Quote = ({quote, author}) => {
  console.log('Quote')
  console.log({quote, author})
  return (
      <div style={ { background: 'red' , color: 'white', padding: '10px'} }>
        <h3>{quote}</h3>
        <h5>{author}</h5>
      </div>
  )
}

const quote = {
  name: 'quote',
  priority: 20,
  test: ({ component, props }) => component === "blockquote" && props.className === "wp-block-quote",
  processor: ({ node }) => {
      const quote = node.children[0].children[0].content
      const author = node.children[1].children[0].children[0].content
      return {
        component: Quote,
        props: { quote, author },
      }
    },
}

export default quote;