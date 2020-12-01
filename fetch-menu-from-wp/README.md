# Demo: Fetching a menu from WordPress

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/fetch-menu-from-wp)

This project is a demo to show how we can fetch a menu from the WordPress REST API and use it in a Frontity project. This allows content editors to make changes to the menu structure in the WordPress admin and for those changes to dynamically show up in Frontity.

You will need to install and activate [the "WP-REST-API V2 Menus" plugin](https://wordpress.org/plugins/wp-rest-api-v2-menus/). Menus are not natively included in the WordPress REST API. This plugin creates endpoints which allows us to fetch menus.

### Install

```
npx install
```

### Run the app

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
