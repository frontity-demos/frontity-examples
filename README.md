# Frontity Examples

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [The Projects](#the-projects)

## Introduction

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) consisting of a number of different projects.

Each project in the monorepo is intended to demonstrate how to achieve a particular task using Frontity.

For example, some projects demonstrate using external resources or libraries with Frontity, such as [demo-frontity-bootstrap](demo-frontity-bootstrap/README.md) which shows how to use [Bootstrap](https://getbootstrap.com/) with Frontity, or [demo-frontity-antd](demo-frontity-antd/README.md) which shows how to use the [Ant Design component library](https://ant.design/) with Frontity, and [demo-using-google-fonts](demo-using-google-fonts/README.md) which shows how to use [Google fonts](https://fonts.google.com/) in a Frontity project.

In those cases the intention is not just to show how to use those specific libraries, but principles that you can use with any similar library. So, for example, if you want to use [Tailwind](https://tailwindcss.com/) or [Bulma](https://bulma.io/) as your CSS framework instead of Bootstrap you can still refer to the Bootstrap demo to determine the basic principles of adding similar libraries.

Likewise with the Google fonts example. The principles demonstrated there can be applied to other font libraries or even to local font files included as assets in your project.

Other examples show, not how to use external resources, but how to use some of the features built into Frontity, how to use the packages included with Frontity, or how to fetch and work with the data available in the WordPress REST API.

## Usage

Each example is tightly focussed on demonstrating one particular thing. To that end most of the examples use `@frontity/mars-theme` as the base and only the code needed to achieve the particular task being demonstrated is added to the theme.

This way the examples are not diluted by attempting to show multiple things in a single demo so you can focus in on just the code you need to replicate the task in your own project.

In addition each project has a corresponding live example running in CodeSandbox. The README file for each project provides a link to the CodeSandbox demo running that project so you can see the featured functionality in action. This also gives you the opportunity to study and deconstruct the code and hack on it in order to fully understand it or even extend it and make it your own.

If you have any questions about any of these projects feel free to reach out to us in the [Frontity community forum](https://community.frontity.org/). If you would like a demo of something that you're trying to do with Frontity that we haven't already covered here then you can also suggest it there.

> Most of the demos in this monorepo have been produced in response to questions that are frequently asked in the community forum.

## The projects

| Project   | Description | <pre>	</pre> |
| --------- | ----------- | ------------ |
| [Contact Form in Footer](contact-form/README.md) | This project demonstrates how to put a contact form _(or any other content fetched from the WP REST API)_ in the footer of each page on the site. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/contact-form)      |
| [Custom Post Types](custom-post-types/README.md) | In Frontity we can use Custom Post Types (CPT) that have been defined in our Wordpress installation. In order to have access to them we must first configure them in our Frontity project. This demo shows you how. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/custom-post-types) |
| [Using a class-based component](demo-class-component/README.md) | This demo shows how to use a class-based React component in a Frontity project, instead of the more usual function-based components. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/demo-class-component) |
| [Frontity + AntD](demo-frontity-antd/README.md)| This project is a demo to show how to use AntD components in a Frontity Project. It also shows how to load Styles for any CSS library in a Frontity Project. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/demo-frontity-antd) |
| [Frontity + Bootstrap](demo-frontity-bootstrap/README.md) | This project demonstrates how to use Bootstrap components in a Frontity Project. The principles shown here can be applied to any other CSS framework such as Tailwind or Bulma. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/demo-frontity-bootstrap) |
| [Frontity + Scripts Header](demo-frontity-script-head/README.md) | This project demonstrates how to include scripts in the header. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/theme-demo-script-head) |
| [Importing Google Fonts into Frontity](demo-using-google-fonts/README.md) | This project demonstrates how to use Google Fonts (or fonts from any source, including locally hosted fonts) in a Frontity project using the `webfontloader` library. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/demo-using-google-fonts) |
| [Fetching a menu from WordPress](fetch-menu-from-wp/README.md) | This project is a demo to show how to fetch a menu from the WordPress REST API and use it in a Frontity project, thereby allowing content creators/editors to dynamically make changes to the menu structure from within the WordPress admin. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/fetch-menu-from-wp) |
| [Head Tags](head-tags/README.md) | This project demonstrates the use of the `@frontity/head-tags` package. This package automatically fetches the data exposed by the REST API Head Tags plugin and adds the tags to the `<head>` section of the HTML document. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/head-tags) |
| [Widget Posts per Category](homepage-categories-widgets/README.md) | This project is a demo to show how to create a Homepage with "widgets" showing posts per category. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/homepage-categories-widgets) |
| [Processors](processor-blockquote/README.md) | This project demonstrates the use of processors in Frontity. A processor parses the HTML content and replaces a defined element with a React component. In this demo we replace the `blockquote` element. | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/processor-blockquote) |
| [`wp-comments`](wp-comments/README.md) | This project is a demo to show how to use the `wp-comments` package to add WordPress comments to your Frontity project | [![](https://img.shields.io/badge/CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/frontity-demos/frontity-examples/tree/master/wp-comments) |
