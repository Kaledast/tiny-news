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

export default function Header() {
  return (
    <Headliner>
      <Nav>
        <NavLinks exact to="/">
          TEST
        </NavLinks>
        <NavLinks to="/saved">SAVED</NavLinks>
        <NavLinks to="/news">NEWS</NavLinks>
      </Nav>
      <HeaderTitle>NEWS TODAY</HeaderTitle>
    </Headliner>
  );
}
/*

<Nav>
<ATag href="#1">today</ATag>
<ATag href="#2">options</ATag>
<ATag href="#3">saved</ATag>
</Nav>
*/
