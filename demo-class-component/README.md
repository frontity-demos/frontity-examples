# Demo: Using a class-based component

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/demo-class-component)

Usually when working with Frontity, or any modern React-based framework, you would use function-based React components.

However sometimes there's a need to use legacy components which may have been written as a class extending the `React.Component` class, or there's a requirement to use class-based components for compatibility reasons.

This demo shows how to use class-based React components in a Frontity project and how to access the state from within a class-based component.

The demo is based on the standard `mars-theme`. The differences are:

1. There's a new route added to the menu in [`frontity.settings.js`](https://github.com/frontity-demos/frontity-examples/blob/master/demo-class-component/frontity.settings.js) *(lines 36 - 39)* for testing the new class-based component.

2. A new property `state.theme.ccString` has been added to [`index.js`](https://github.com/frontity-demos/frontity-examples/blob/master/demo-class-component/packages/mars-theme/src/index.js) *(line 23)*, which will be used later to demonstrate how we can access properties in the state from within the class-based component.

3. A new file [`class-component.js`](https://github.com/frontity-demos/frontity-examples/blob/master/demo-class-component/packages/mars-theme/src/components/class-component.js) contains a new component created as a class-based component rather than a function-based component. Note that:

    **a.** You **need to** import `React` *(line 1)*;

    **b.** Class-based components **must** have a `render()` function;

    **c.** You need to import the HOC `connect` *(line 2)* and connect the class-based component to the state *(line 16)* when exporting it;

    **d.** You can then access properties in the state using `this.props` within the class-based component (*line 9* accesses `state.router.link` and *line 10* accesses `state.theme.ccString`, the custom property we added above ).

4. The class-based component is imported normally into [`index.js`](https://github.com/frontity-demos/frontity-examples/blob/master/demo-class-component/packages/mars-theme/src/components/index.js) *(line 9)* and then rendered depending on the value of `state.router.link` *(line 44)*.

### Install

```
npm install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

---

### » Frontity Channels 🌎

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

- 📖 **[Docs](https://docs.frontity.org)**: this is the place to learn how to build amazing sites with Frontity.
- 👨‍👩‍👧‍👦 **[Community](https://community.frontity.org/)**: use our forum to [ask any questions](https://community.frontity.org/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Frontity](https://community.frontity.org/c/showcases)!
- 🐞 **[GitHub](https://github.com/frontity/frontity)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.frontity.org/)!
- 🗣 **Social media**: a more informal place to interact with Frontity users, reach out to us on [Twitter](https://twitter.com/frontity).
- 💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://frontity.org/)

### » Get involved 🤗

Got questions or feedback about Frontity? We'd love to hear from you. Use our [community forum](https://community.frontity.org) yo ! ❤️

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help → [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute)
