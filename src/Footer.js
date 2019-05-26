import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import homeButton from "./news/images/HomeButton.svg";

const Footliner = styled.footer`
  display: flex;
  justify-content: center;
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

const HomeButton = styled.button`
  background: url(${homeButton}) no-repeat center;
  height: 50px;
  width: 50px;
  border-radius: 5px;

  border: 1px solid white;
`;

export default function Footer() {
  return (
    <Footliner>
      <nav>
        <NavLink to="/">
          <HomeButton />
        </NavLink>
      </nav>
    </Footliner>
  );
}
