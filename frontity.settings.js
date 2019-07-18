const settings = {
  name: "Three Bunnies Football Club",
  author: "Anna Branco",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Three Bunnies Football Club",
      description: "women's football team"
    }
  },
  packages: [
    {
      name: "@frontity/three-bunnies-theme",
      state: {
        theme: {
          menu: [
            ["News", "/"],
            ["The Club", "/the-club/"],
            ["Players", "/players/"],
            ["Matches", "/category/matches/"],
            ["Juniors", "/tag/junior/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://public-api.wordpress.com/wp/v2/sites/threebunniesfc.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
