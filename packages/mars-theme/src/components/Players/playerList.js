import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { playerData } from "./utils";
import ShirtImage from "../../../../../assets/images/shirt.png";
import ShirtGKImage from "../../../../../assets/images/shirt-gk.png";

const PlayersList = ({ state }) => {
  const data = state.source.get("/players/");
  const players = data.items
    .map(item => playerData(state.source.page[item.id]))
    .sort((a, b) => a.shirt - b.shirt);
  return (
    <>
      <Container>
        {players &&
          players.map(player => (
            <Shirt
              key={player.id}
              isSelected={state.router.link === player.link}
              type={player.position}
            >
              <Link link={player.link}>
                <PlayerName letters={player.alias.length}>
                  {player.alias}
                </PlayerName>
                <PlayerNumber>{player.shirt}</PlayerNumber>
              </Link>
            </Shirt>
          ))}
      </Container>
    </>
  );
};

export default connect(PlayersList);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-left: 15vw;
`;

const Shirt = styled.div`
  background-image: url(${props =>
    props.type === "GK" ? ShirtGKImage : ShirtImage});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  &:hover {
    width: 120px;
    height: 120px;
  }
`;

const PlayerNumber = styled.p`
  color: white;
  font-family: "Barlow";
  font-size: 3rem;
  margin: -8px 0 0;
  padding: 0;
  text-align: center;
  font-weight: 900;
  transition: all 0.5s;
`;

const PlayerName = styled.p`
  color: white;
  font-family: "Barlow";
  margin: 15px 0 0;
  padding: 0;
  font-size: ${props => (props.letters > 7 ? "0.8rem" : "1rem")};
  letter-spacing: ${props => (props.letters > 7 ? "-1px" : "normal")};
`;
