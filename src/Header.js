import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import headerIcon from "./news/images/IconHorse.svg";

const Headliner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #2f1953;
  height: 65px;
`;
const HeaderTitle = styled.div`
  color: #060606;
  font-size: 2em;
  text-shadow: 2px 2px #bff2c3;
`;

const Nav = styled.nav`
  width: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const NavLinks = styled(NavLink)`
  margin: 0px 15px;
  color: #fdf19a;
`;
const Icondiv = styled.img`
  background: url(${headerIcon}) no-repeat center;
  height: 43px;
  width: 43px;
  padding: 0;
  border-radius: 5px;
  border: 1px solid white;
`;

export default function Header({ handleFilter }) {
  return (
    <Headliner>
      <HeaderTitle>Horse News</HeaderTitle>
      <Icondiv />

      <Nav>
        <NavLinks onClick={() => handleFilter("saved")} to="/saved">
          SAVED
        </NavLinks>
        <NavLinks onClick={() => handleFilter("all")} to="/">
          NEWS
        </NavLinks>
      </Nav>
    </Headliner>
  );
}
