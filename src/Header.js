import React from "react";
import styled from "styled-components";

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

export default function Header() {
  return (
    <Headliner>
      <HeaderTitle>NEWS TODAY</HeaderTitle>
    </Headliner>
  );
}
/*
const Nav = styled.nav`
  display: flex;
  margin-right: 10px;
  margin-top: 25px;
`;

const ATag = styled.a`
  justify-content: center;
  margin: 3px;
  color: #ef925e;
`;
<Nav>
<ATag href="#1">today</ATag>
<ATag href="#2">options</ATag>
<ATag href="#3">saved</ATag>
</Nav>
*/
