import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Headliner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #7c205b;
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
  margin: 3px;
  color: #fdf19a;
`;

export default function Header({ handleFilter }) {
  return (
    <Headliner>
      <HeaderTitle>Horse News</HeaderTitle>
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
