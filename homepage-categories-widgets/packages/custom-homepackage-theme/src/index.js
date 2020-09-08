import Theme from './components/Theme'
import {categoriesWidgetsHome} from './config'

export default {
  name: "custom-homepackage-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await Promise.all(
          Object.keys(categoriesWidgetsHome)
            .map(category => actions.source.fetch(`/category/${category}/`))
        )
      }
    }
  }
};
