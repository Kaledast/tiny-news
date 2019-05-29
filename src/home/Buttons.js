import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.div`
  background: url(${props => props.buttonIcon}) no-repeat center;
  width: 80px;
  height: 60px;
  border-radius: 10%;
`;

export default function Buttons({ topic }) {
  return (
    <Link to={`/news/${topic.id}`}>
      <Button buttonIcon={topic.img} />
    </Link>
  );
}
