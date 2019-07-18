import React from "react";
import { styled } from "frontity";
import Logo from "../../../assets/images/3bunnies-logo.gif";
import Nav from "../nav.js";
import Link from "../link";

const Home = () => (
  <HomeContainer>
    <HomeLogo src={Logo} alt="Three Bunnies shield" />
    <Nav />
    <HomeTitle>Hopping to victory</HomeTitle>
    <AuthorInfo>
      2019 by{" "}
      <StyledLink link="https://www.twitter.com/anyabranco">
        Anna Branco
      </StyledLink>
    </AuthorInfo>
  </HomeContainer>
);

export default Home;

const HomeContainer = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(145, 236, 168, 0.4)
    ),
    url("https://www.scenolia.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/2/2/22055.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 30vw;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid black;
  border-top: 0;
  border-left: 0;
  position: fixed;
  box-shadow: 2px 0 5px 1px rgba(0, 0, 0, 0.4);
`;

const HomeLogo = styled.img`
  z-index: 3;
  margin: 10vh auto 30px;
  width: 400px;
  height: 220px;
`;

const HomeTitle = styled.h1`
  background: rgba(white, 0.4);
  width: 100vw;
  text-shadow: 0 0 2px white;
  line-height: 1.5;
  color: black;
  font-family: "Barlow", sans-serif;
  font-size: 5rem;
  font-weight: 600;
  line-height: 0.78;
  color: darkgreen;
`;

const AuthorInfo = styled.p`
  color: white;
  font-size: 0.9rem;
  font-family: "Barlow", sans-serif;
  text-shadow: 0 0 1px black;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  &:hover {
    color: yellow;
  }
`;
