import Theme from "./components";
import { connect, styled } from "frontity";

import image from "@frontity/html2react/processors/image";

const before = async ({ libraries, actions }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);

  libraries.source.handlers.push({
    priority: 1,
    pattern: "/players/",
    func: async ({ route, params, state, libraries }) => {
      // 1. get all pages with parent "players"
      const playersList = await libraries.source.api.get({
        endpoint: "pages",
        params: { parent: 48 }
      });

      const playersPage = await libraries.source.api.get({
        endpoint: "pages",
        params: { include: 48 }
      });

      // 2. add product to state
      const items = await libraries.source.populate({
        response: playersList,
        state
      });
      const [page] = await libraries.source.populate({
        response: playersPage,
        state
      });

      // 3. add route to data
      Object.assign(state.source.data[route], {
        isPlayersPage: true,
        isPostType: true,
        type: "page",
        id: page.id,
        items: items.map(item => ({
          type: item.type,
          id: item.id,
          link: item.link
        }))
      });
    }
  });

  libraries.source.handlers.push({
    priority: 1,
    pattern: "/players/:slug",
    func: async ({ route, params, state, libraries }) => {
      const response = await libraries.source.api.get({
        endpoint: "pages",
        params: { parent: 48, slug: params.slug }
      });

      const [player] = await libraries.source.populate({ response, state });

      Object.assign(state.source.data[route], {
        id: player.id,
        type: player.type,
        isPlayer: true
      });
    }
  });

  // Fetch all the players.
  await actions.source.fetch("/players");
};

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: true,
        showOnPost: false
      }
    },
    players: undefined
  },
  actions: {
    theme: {
      beforeSSR: before,
      beforeCSR: before
    }
  }
};

export default marsTheme;
