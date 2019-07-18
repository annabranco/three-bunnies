import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <StyledLink link="/broken-link">
        <LoginButton>FANS LOGIN</LoginButton>
      </StyledLink>
    </Container>
  </>
);

export default connect(Header);

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LoginButton = styled.div`
  background-image: linear-gradient(to left, gray, lightgray);
  width: 120px;
  border: 1px solid black;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  cursor: pointer;
  color: darkred;
  text-shadow: 1px 1px 1px black;
  &:hover {
    color: gold;
  }
`;
