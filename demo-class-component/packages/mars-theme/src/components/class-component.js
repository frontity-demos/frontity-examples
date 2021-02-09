import React from 'react'
import { connect, styled } from 'frontity'

class ClassComponent extends React.Component {
  render() {
    return (
      <Container>
        <h2>This page is rendered by a class-based component</h2>
        <p><em>Current path:</em> {this.props.state.router.link}</p>
        <p><em>Value of 'state.theme.ccString':</em> {this.props.state.theme.ccString}</p>
      </Container>
    )
  }
}

export default connect(ClassComponent)

const Container = styled.div`
  h2, p {
    display: block;
    width: 100%;
  }
`