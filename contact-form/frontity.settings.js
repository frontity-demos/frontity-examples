const settings = {
  name: "contact-form",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About", "/about/"],
            /* [
              "Contact",
              "/contact/"
            ], */
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://test.frontity.org/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    /**
     * add the CF7 package to the packages array
     */
    "frontity-contact-form-7",
  ],
};

export default settings;
