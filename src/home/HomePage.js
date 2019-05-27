import React from "react";
import styled from "styled-components";

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  height: 100%;
  padding: 30px;
`;

const Header = styled.h1`
  color: white;
`;

const SubHeader = styled.h2`
  color: white;
  width: 140px;
`;

export default function HomePage() {
  return (
    <HomeBody>
      <Header>Welcome HOME little pony</Header>
      <SubHeader>Choose your destination wisely...</SubHeader>
    </HomeBody>
  );
}
