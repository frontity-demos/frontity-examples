const settings = {
  "name": "vintage-vinyl",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Vintage Vinyl Collector",
      "description": "Spin those discs"
    }
  },
  "packages": [
    {
      "name": "mars-theme-vintage-vinyl",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Rock",
              "/record_cat/rock/"
            ],
            [
              "Punk",
              "/record_cat/punk/"
            ],
            [
              "Grunge",
              "/record_cat/grunge/"
            ],
            [
              "All records",
              "/record_cat/"
            ],
            [
              "Catalogue",
              "/catalogue"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://app-5efddb43c1ac181508283e93.closte.com/wp-json",
          "postTypes": [
            {
              type: "record",
              endpoint: "record",
              archive: "/record_cat"
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
