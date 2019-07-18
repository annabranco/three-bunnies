import image from "@frontity/html2react/processors/image";
import Theme from "./components";
import { players, player } from "./utils/handlers";

const before = async ({ libraries, actions }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);

  // Add handlers for both /players/ and /players/:name.
  libraries.source.handlers.push(players, player);

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
