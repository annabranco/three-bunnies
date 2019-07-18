import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Players from "./Players";
import Page404 from "./page404.js";
import Loading from "./loading";
import Home from "./Home";
import PlayersList from "./Players/playerList.js";

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow: auto;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css?family=Averia+Sans+Libre|Averia+Serif+Libre|Barlow&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={globalStyles} />
      <HeadContainer>
        <Header />
      </HeadContainer>
      <Body>
        <Home />
        <Main>
          {data.isFetching && <Loading />}
          {data.isArchive && <List />}
          {data.isPostType && <Post />}
          {data.isPlayersPage && <PlayersList />}
          {data.isPlayer && (
            <>
              <Players />
              <PlayersList />
            </>
          )}
          {data.is404 && <Page404 />}
        </Main>
      </Body>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to left, darkgreen, mediumseagreen);
  border: 4px solid white;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  position: fixed;
  width: 100vw;
  z-index: 5;
  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.4);
  overscroll-behavior: none;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
  overscroll-behavior: contain;
`;

const Main = styled.div`
  margin: 50px 0 0 35vw;
  overscroll-behavior: none;
`;
