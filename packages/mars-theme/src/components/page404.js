import React from "react";
import { styled } from "frontity";
import photo404 from "../../../../assets/images/photo404.png";

const Page404 = () => (
  <Container>
    <Title>Oh-noo! 404</Title>
    <Description>
      <p>The page you are trying to reach is OUT. </p>
      <p>Please use the links on the left to navigate.</p>
    </Description>
    <Image src={photo404} />
  </Container>
);

export default Page404;

const Container = styled.div`
  width: 180%;
  margin: 0;
  padding: 24px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  height: 103%;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: red;
  font-size: 4em;
  text-shadow: 0 0 3px black;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;

const Image = styled.img`
  width: 400px;
  margin-top: 60px;
`;
