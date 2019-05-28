import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Button = styled.button`
  background: url(${props => props.buttonIcon}) no-repeat center;
  width: 80px;
  height: 60px;
  border-radius: 10%;
`;

export default function Buttons({ rubrikItem, rubrikFunktion }) {
  console.log(rubrikItem.val);
  return (
    <NavLink to="/news">
      <Button
        buttonIcon={rubrikItem.img}
        onClick={() => rubrikFunktion(rubrikItem.val)}
      />
    </NavLink>
  );
}
