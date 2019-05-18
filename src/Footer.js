import React from "react";
import styled from "styled-components";
const Footliner = styled.footer`
  background: #3c211a;
  grid-column-end: span 3;
  color: #ef925e;
`;

export default function Footer() {
  return <Footliner>this is the default footer</Footliner>;
}
