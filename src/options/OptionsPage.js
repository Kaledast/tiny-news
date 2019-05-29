import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  height: 100%;
  padding: 30px;
`;

export default function OptionsPage() {
  return (
    <Container>
      <h1>Choose your Options here...</h1>
    </Container>
  );
}
