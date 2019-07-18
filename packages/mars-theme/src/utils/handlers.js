export const players = {
  priority: 8,
  pattern: "/players/",
  func: async ({ route, params, state, libraries }) => {
    // 1. get all pages with parent "players".
    const playersList = await libraries.source.api.get({
      endpoint: "pages",
      params: { parent: 48 }
    });

    // 1. get "players" page itself.
    const playersPage = await libraries.source.api.get({
      endpoint: "pages",
      params: { include: 48 }
    });

    // 2. add everything to the state.
    const items = await libraries.source.populate({
      response: playersList,
      state
    });
    const [page] = await libraries.source.populate({
      response: playersPage,
      state
    });

    // 3. add info to data
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
};

export const player = {
  priority: 9,
  pattern: "/players/:slug",
  func: async ({ route, params, state, libraries }) => {
    // 1. get page with that slug.
    const response = await libraries.source.api.get({
      endpoint: "pages",
      params: { parent: 48, slug: params.slug }
    });

    // 2. add it to the state.
    const [player] = await libraries.source.populate({ response, state });

    // 3. add info to data
    Object.assign(state.source.data[route], {
      id: player.id,
      type: player.type,
      isPlayer: true
    });
  }
};
