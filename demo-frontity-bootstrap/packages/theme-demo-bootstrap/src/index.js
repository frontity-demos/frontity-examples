import Theme from "./components";

const marsTheme = {
  name: "theme-demo-bootstrap",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};

export default marsTheme;
