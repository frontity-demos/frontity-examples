const settings = {
  name: "vintage-vinyl",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Kupi-Business",
      description: "Покупка и продажа бизнеса"
    }
  },
  packages: [
    {
      name: "mars-theme-vintage-vinyl",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            // ["Rock", "/record_cat/rock/"],
            // ["Punk", "/record_cat/punk/"],
            // ["Grunge", "/record_cat/grunge/"],
            ["Все объявления", "/all/"]
            // ["Catalogue", "/catalogue"],
            // ["About Us", "/about-us/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.kupi-business.kz/wp-json",
          params: {
            per_page: 50,
            type: ["post", "page"]
          },

          postTypes: [
            {
              type: "hp_listing",
              endpoint: "hp_listing",
              archive: "/all"
            }
          ],
          taxonomies: [
            {
              taxonomy: "record_cat",
              endpoint: "record_cat",
              postTypeEndpoint: "record"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
