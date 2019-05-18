import React from "react";
import styled from "styled-components";
const Footliner = styled.footer`
  background: lightcoral;
  grid-column-end: span 3;
`;

export default function Footer() {
  return <Footliner>this is the default footer</Footliner>;
}
