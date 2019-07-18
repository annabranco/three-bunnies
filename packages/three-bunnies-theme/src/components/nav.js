import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0;
  overflow-x: auto;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: space-around;
  height: 100px;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: 0.2s ease;

  &:hover {
    font-size: 1.3em;
    transition: 0.4s ease;
    color: gold;
  }

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) => (isSelected ? "#fff" : "transparent")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
