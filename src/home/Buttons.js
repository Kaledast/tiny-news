import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.div`
  background: url(${props => props.buttonIcon}) no-repeat center;
  width: 80px;
  height: 60px;
  border-radius: 10%;
`;

export default function Buttons({ topic, onSelect, location }) {
  console.log(location);
  return (
    <Link to={`/news/${topic.id}`} onClick={() => onSelect(topic.id)}>
      <Button buttonIcon={topic.img} />
    </Link>
  );
}
