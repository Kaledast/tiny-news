import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import headerIcon from "./news/images/IconHorse.svg";
import { Link } from "react-router-dom";

const SearchBar = styled.input`
  margin-top: 10px;
  height: 20px;
  width: 230px;
`;

const Headliner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #2f1953;
  height: 65px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderTitle = styled.div`
  color: #060606;
  font-size: 2em;
  margin-left: 4px;
  text-shadow: 2px 2px #bff2c3;
`;

const Nav = styled.nav`
  width: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0px 15px;
  color: #fdf19a;
`;
const Logo = styled.img`
  background: url(${headerIcon}) no-repeat center;
  height: 43px;
  width: 43px;
  padding: 0;
  border-radius: 5px;
  border: 1px solid white;
`;

function Header({ onTopicSelect, history }) {
  useEffect(() => {});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    const [input] = event.target.children;
    console.log("Your Search", input.value);
    onTopicSelect(input.value);
    history.push(`/news/${input.value}`);
  };

  return (
    <Headliner>
      <Div>
        <Logo />
        <HeaderTitle>Horse News</HeaderTitle>
      </Div>

      <form onSubmit={handleSubmit} searchText="Search topic">
        <SearchBar type="text" placeholder="Search..." />
        <button type="submit">search</button>
      </form>

      <Nav>
        <StyledNavLink to="/saved">SAVED</StyledNavLink>
      </Nav>
    </Headliner>
  );
}

export default withRouter(Header);
//<StyledNavLink to={`/news/${lastTopic}`}>NEWS</StyledNavLink>
