import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import homeButton from "./news/images/HomeButton.svg";
import optionsButton from "./news/images/OptionsButton.svg";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #2f1953;
  height: 65px;
  padding: 5px;
  z-index: 10;
`;

const HomeButton = styled.div`
  background: url(${homeButton}) no-repeat center;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  border: 1px solid white;
`;

const OptionsButton = styled.div`
  background: url(${optionsButton}) no-repeat center;
  height: 50px;
  width: 50px;
  border-radius: 5px;
  border: 1px solid white;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > * {
    margin: 0 10px 0 10px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledNav>
        <Link to="/home">
          <HomeButton />
        </Link>
        <Link to="/options">
          <OptionsButton />
        </Link>
      </StyledNav>
    </StyledFooter>
  );
}
