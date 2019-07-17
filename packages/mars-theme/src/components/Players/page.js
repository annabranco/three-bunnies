import React from "react";
import { styled } from "frontity";
import PlayerDetails from "./details";

const PlayerPage = () => (
  <Container>
    <PlayerDetails />
  </Container>
);

export default PlayerPage;

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  color: black;
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  height: 40px;
`;

const Title = styled.h2`
  margin-top: -5px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;
