import React from "react";
import styled from "styled-components";

const Headliner = styled.header`
  background: lightcoral;
  grid-column-start: span 3;
`;

export default function Header() {
  return (
    <Headliner>
      News Today
      <nav>
        <a href="#1">today</a>
        <a href="#2">options</a>
        <a href="#3">saved</a>
      </nav>
    </Headliner>
  );
}
