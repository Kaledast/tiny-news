import React from "react";
import styled from "styled-components";

const HomeBody = styled.div`
  background: black;
  height: 100%;
`;

const Header = styled.h1`
  color: white;
`;

export default function HomePage() {
  return (
    <HomeBody>
      <Header>Welcome HOME little pony</Header>
    </HomeBody>
  );
}
