# Demo: `intersection-observer-hooks`

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/intersection-observer-hooks)

This project is a demo to show how to use the Intersection Observer Hook `useInView` available in the `@frontity/hooks` package or directly implemented in some components available at `@frontity/components`

## Custom use of `useInView`

In the processor defined at `src/processors/heading-in-view.js` we replace the headings found in the HTML with a version of the heading that notifies in the console when the heading is in the viewport

## Components with `useInView` integrated

Some of the components available at `@frontity/components` already have an Intersection Observer behaviour making them "active" only when they appear in the viewport

Some examples are the [`<Image>`](https://api.frontity.org/frontity-packages/collections-packages/components#image) component and the [`<Iframe>`](https://api.frontity.org/frontity-packages/collections-packages/components#iframe) component

In this demo you can see how the `<Iframe>` component is used and how the URL is not requested until the `<iframe>` appears in the viewport

*`src/components/post.js`*

```js
import { useEffect } from "react";
...
import Iframe from "@frontity/components/iframe";

const Post = ({ state, actions, libraries }) => {
  
  const data = state.source.get(state.router.link);
  
  const post = state.source[data.type][data.id];
  
  ...

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      ...

      { post.sourcePost  && <Iframe src={post.sourcePost}  height="500" width="100%" /> }

    </Container>
  ) : null;
};

export default connect(Post);
```

> The `sourcePost` property is available because of the application of the processor `source` defined at `src/processors/source.js`

### Install

```
npm install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
