# Demo: Contact Form in Footer

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/contact-form)

This project is a demo to show how to put a contact form (or any other content fetched from the WP REST API) in the footer of each page on the site.

## Preparation

You should have already created a page on your WordPress site with the content, and **just** the content, that you want to show in the Footer. Also change the `state.source.api` to point to your WordPress API.

Install the [frontity-contact-form-7 package](https://www.npmjs.com/package/frontity-contact-form-7) by running `npm i frontity-contact-form-7` from the root folder of your project. Add it to the `packages` array in `frontity.settings.js`:

```jsx
// frontity.settings.js

const settings = {
    // ...
    "packages": [
    // ...
        "frontity-contact-form-7"
    ]
// ...
}
```

## Implementation

We use the [`beforeSSR` action](https://docs.frontity.org/learning-frontity/actions#beforessr-server-only-__) to pre-fetch the content.

Add a `beforeSSR` action to pre-fetch the content from the `/contact` endpoint to the `actions.theme` object in your project's `index.js` file:

```jsx
// packages/mars-theme/src/index.js

beforeSSR: async ({ actions }) => {
    await actions.source.fetch("/contact");
}
```

Create a `<Footer>` component. Our implementation can be seen in the `footer.js` file of this project, where you will notice how we retrieve the content, i.e. the contact form, from the state that was pre-fetched using the `beforeSSR` action.

We need to pass in `libraries` as a parameter in order to use the `Html2React` component to ensure that the form is rendered rather than the plain HTML.

Finally import and use the `<Footer>` component in the themes root component. This is in `index.js`:

```jsx
// packages/mars-theme/src/components/index.js
//...
import Footer from "./footer";
//...
const Theme = ({ state }) => {
//...
    <Footer />
//...
}
```

> This demo was created as a result of this thread in the community forum: https://community.frontity.org/t/how-to-add-contact-form-7-form-to-a-page-using-acf-fields-or-page-into-page-in-frontity/1765

### Install

```
npx install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
