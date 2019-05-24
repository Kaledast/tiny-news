import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Headliner = styled.header`
  background: #3c211a;
  grid-column-start: span 3;
  display: flex;
  justify-content: space-between;
`;
const HeaderTitle = styled.h1`
  color: #060606;
  width: 300px;
  font-size: 1.7em;
  margin-left: 10px;
  text-shadow: 2px 2px #ef925e;
`;

const Nav = styled.nav`
  display: flex;
  margin-right: 10px;
  margin-top: 25px;
`;

const NavLinks = styled(NavLink)`
  justify-content: center;
  margin: 3px;
  color: #ef925e;
`;

export default function Header({ handleFilter }) {
  return (
    <Headliner>
      <Nav>
        <NavLinks onClick={() => handleFilter("saved")} to="/saved">
          SAVED
        </NavLinks>
        <NavLinks onClick={() => handleFilter("all")} to="/">
          NEWS
        </NavLinks>
      </Nav>
      <HeaderTitle>NEWS TODAY</HeaderTitle>
    </Headliner>
  );
}
