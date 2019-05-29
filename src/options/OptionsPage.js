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

const StyledContent = styled.h1`
  color: white;
`;

export default function OptionsPage() {
  return (
    <Container>
      <StyledContent>Choose your Options here...</StyledContent>
    </Container>
  );
}
