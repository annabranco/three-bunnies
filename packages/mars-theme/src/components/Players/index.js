import React from "react";
import { styled } from "frontity";
import Post from "../post";
import PlayerDetails from "./details";

const Players = () => (
  <Container>
    <Post />
    <PlayerDetails />
  </Container>
);

export default Players;

const Container = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  align-items: flex-start;
`;
