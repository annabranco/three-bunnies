import React from "react";
import { connect, styled } from "frontity";
import { playerData } from "./utils";
import { COUNTRIES } from "../../utils/countries";
import { POSITIONS } from "../../utils/positions";
import FootballFieldImg from "../../../../../assets/images/footballField.jpg";
import RainbowFlag from "../../../../../assets/images/rainbow-flag.png";

const PlayerDetails = ({ state }) => {
  const data = state.source.get(state.router.link);
  const player = playerData(state.source.page[data.id]);
  const countryCode = COUNTRIES[player.country.toLowerCase()];
  const countryFlag = countryCode
    ? `https://www.countryflags.io/${countryCode}/shiny/32.png`
    : RainbowFlag;
  const playerImgPosition = {};

  switch (player.position) {
    case "GK":
      playerImgPosition.bottom = "-10px";
      playerImgPosition.left = "43px";
      break;
    case "DL":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "5px";
      break;
    case "DC":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "43px";
      break;
    case "DR":
      playerImgPosition.bottom = "20px";
      playerImgPosition.right = "5px";
      break;
    case "DCL":
      playerImgPosition.bottom = "20px";
      playerImgPosition.left = "28px";
      break;
    case "DCR":
      playerImgPosition.bottom = "20px";
      playerImgPosition.right = "28px";
      break;
    case "RM":
      playerImgPosition.bottom = "63px";
      playerImgPosition.right = "5px";
      break;
    case "DM":
      playerImgPosition.bottom = "38px";
      playerImgPosition.left = "43px";
      break;
    case "DML":
      playerImgPosition.bottom = "38px";
      playerImgPosition.left = "28px";
      break;
    case "DMR":
      playerImgPosition.bottom = "38px";
      playerImgPosition.right = "28px";
      break;
    case "MC":
      playerImgPosition.bottom = "63px";
      playerImgPosition.left = "43px";
      break;
    case "MCL":
      playerImgPosition.bottom = "63px";
      playerImgPosition.left = "28px";
      break;
    case "MCR":
      playerImgPosition.bottom = "63px";
      playerImgPosition.right = "28px";
      break;
    case "AM":
      playerImgPosition.bottom = "38px";
      playerImgPosition.left = "43px";
      break;
    case "AML":
      playerImgPosition.bottom = "38px";
      playerImgPosition.left = "28px";
      break;
    case "AMR":
      playerImgPosition.bottom = "38px";
      playerImgPosition.right = "28px";
      break;
    case "LM":
      playerImgPosition.bottom = "63px";
      playerImgPosition.left = "5px";
      break;
    case "RW":
      playerImgPosition.top = "30px";
      playerImgPosition.right = "10px";
      break;
    case "FW":
      playerImgPosition.top = "18px";
      playerImgPosition.left = "43px";
      break;
    case "ST":
      playerImgPosition.top = "5px";
      playerImgPosition.left = "43px";
      break;
    case "FWL":
      playerImgPosition.top = "18px";
      playerImgPosition.left = "28px";
      break;
    case "FWR":
      playerImgPosition.top = "18px";
      playerImgPosition.right = "28px";
      break;
    case "LW":
      playerImgPosition.top = "30px";
      playerImgPosition.left = "10px";
      break;
    default:
      playerImgPosition.top = 0;
      playerImgPosition.left = 0;
      break;
  }
  return (
    <Container>
      <div>
        <p>{POSITIONS[player.position]}</p>
        <OuterFootballField>
          <FootballField>
            <PlayerIcon
              playerImgPosition={playerImgPosition}
              playerPosition={player.position}
            >
              {player.shirt}
            </PlayerIcon>
          </FootballField>
        </OuterFootballField>
        <ContainerPlayerCity>
          Born in {player.city}{" "}
          <CountryFlag src={countryFlag} alt={`Flag of ${player.country}`} />
        </ContainerPlayerCity>
        <ContainerPlayerSince>
          On the Club since {player.since}
        </ContainerPlayerSince>
        <ContainerPlayerTwitter>
          <a href={player.twitter} target="_Blank">
            <TwitterButton
              src="http://pngimg.com/uploads/twitter/twitter_PNG32.png"
              alt={`${player.name} on Twitter`}
            />
          </a>{" "}
        </ContainerPlayerTwitter>
      </div>
    </Container>
  );
};

export default connect(PlayerDetails);

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  color: black;
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;
  height: 100%;
`;

const OuterFootballField = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
`;

const FootballField = styled.div`
  display: block;
  position: relative;
  margin-top: 20px;
  background-image: url(${FootballFieldImg});
  height: 153px;
  width: 114px;
`;

const PlayerIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 20px;
  background: ${({ playerPosition }) =>
    playerPosition === "GK" ? "green" : "crimson"};
  height: 28px;
  width: 28px;
  font-size: 17px;
  color: white;
  top: ${({ playerImgPosition }) =>
    playerImgPosition.top ? playerImgPosition.top : "auto"};
  bottom: ${({ playerImgPosition }) =>
    playerImgPosition.bottom ? playerImgPosition.bottom : "auto"};
  right: ${({ playerImgPosition }) =>
    playerImgPosition.right ? playerImgPosition.right : "auto"};
  left: ${({ playerImgPosition }) =>
    playerImgPosition.left ? playerImgPosition.left : "auto"};
`;

const ContainerPlayerCity = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 250px;
`;

const ContainerPlayerSince = styled.div`
  position: relative;
  top: 280px;
`;

const ContainerPlayerTwitter = styled.div`
  position: relative;
  top: 310px;
`;

const CountryFlag = styled.img`
  margin-left: 10px;
`;

const TwitterButton = styled.img`
  width: 50px;
`;
