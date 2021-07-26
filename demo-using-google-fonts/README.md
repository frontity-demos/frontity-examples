# Demo: importing Google Fonts into Frontity

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/demo-using-google-fonts)

This project demonstrates how to use Google Fonts in a Frontity project. It uses the [`webfontloader`](https://www.npmjs.com/package/webfontloader) library.

The technique illustrated here can be used for other font sources besides Google Fonts, including locally hosted fonts. See the [`webfontloader` documentation](https://github.com/typekit/webfontloader) for information on usage of `webfontloader`.

`webfontloader` uses the `window` object which doesn't exist in SSR, so we only want to use the fonts in the browser. This project therefore uses a `beforeCSR` function to dynamically import `webfontloader` and then fetch the specified fonts in `packages/mars-theme/src/index.js`.

```js
const marsTheme = {
  name: "@frontity/mars-theme",
  // ...
  actions: {
    theme: {
      beforeCSR: () => {
        import("webfontloader").then((WebFontLoader) => {
          WebFontLoader.load({
            google: {
              families: [
                "Poppins:100,200,400,600:latin-ext",
                "Merriweather:400,700:latin-ext",
              ],
            },
          });
        });
      },
    },
  },
  // ...
};
```

The fonts can be used in JS-in-CSS as normally, such as this example applying the `Poppins` font to the `body` tag in `packages/mars-theme/src/components/index.js`:

```js
const globalStyles = css`
  body {
    margin: 0;
    font-family: Poppins;
  }
  // ...
`;
```

or this example in `packages/mars-theme/src/components/header.js` applying the `Merriweather` font to just the `<Title>` component:

```js
const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  font-family: Merriweather;
  font-weight: 400;
`;
```

### Install

Install the dependencies for this project by running this command in the root directory of the project:

```
npm install
```

### Run the app

This command runs the app in development mode:

```
npx frontity dev
```

Open http://localhost:3000 to view it in the browser.
