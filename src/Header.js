import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import headerIcon from "./news/images/IconHorse.svg";

const SearchBar = styled.input`
  max-width: 130px;
`;

const StyledHeader = styled.header`
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
  min-width: 43px;
  padding: 0;
  border-radius: 5px;
  border: 1px solid white;
`;

const StyledForm = styled.form`
  display: flex;
  justify-self: center;
  background: white;
  margin-left: 10px;
`;

function Header({ onSearchSelect, history }) {
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    const [input] = event.target.children;
    console.log("search", input.value);
    onSearchSelect(input.value);
    history.push(`/news/${input.value}`);
  };

  return (
    <StyledHeader>
      <Div>
        <Logo />
        <HeaderTitle>Horse News</HeaderTitle>
      </Div>

      <StyledForm onSubmit={handleSubmit} searchtext="Search topic">
        <SearchBar type="text" placeholder="Search..." />
        <button type="submit">go!</button>
      </StyledForm>

      <Nav>
        <StyledNavLink to="/saved">SAVED</StyledNavLink>
      </Nav>
    </StyledHeader>
  );
}

export default withRouter(Header);
