# Demo: Processors

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/processor-blockquote)


This project is a demo to show the use of processors in Frontity

In frontity we can define custom [Processors](https://docs.frontity.org/api-reference-1/frontity-html2react#create-your-own-processors) for the [`@frontity/html2react`](https://docs.frontity.org/api-reference-1/frontity-html2react) package to parse the HTML received, detect specific patterns and replace them by a custom content

In this demo there's a processor that, for every HTML displayed in React with `<Html2React html={htmlRenderedFromPost} /> `, replaces this...

```html
<blockquote class="wp-block-quote">
    <p>A day without laughter is a day wasted</p>
    <cite>Nicolas Chamfort</cite>
</blockquote>
```

by this...

```html
<div>
    <h3>A day without laughter is a day wasted</h3>
    <h5>Nicolas Chamfort</h5>
</div>
```

The custom processor is defined at [`/src/processors/quote.js`](https://github.com/frontity-demos/frontity-examples/blob/master/processor-blockquote/packages/mars-theme/src/processors/quote.js) and is added to the [`html2react`](https://docs.frontity.org/api-reference-1/frontity-html2react) package at [`/src/index.js`](https://github.com/frontity-demos/frontity-examples/blob/master/processor-blockquote/packages/mars-theme/src/index.js#L49)

- At https://test.frontity.org/2016/paris-city-of-light/ you can see the original HTML
- At https://processor-blockquote.vercel.app/2016/paris-city-of-light/ you can see this HTML parsed using the custom processor


> This demo was created as a result of this thread in the community forum: https://community.frontity.org/t/integrating-frontity-with-gutenberg/2403

### Install

```
npx install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
