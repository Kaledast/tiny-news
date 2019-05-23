import React from "react";
import styled from "styled-components";

const NewsPageContent2 = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 100vh;
  background: black;
  background-size: cover;
`;

const TestLine = styled.h2`
  color: white;
`;

export default function TestPage() {
  return (
    <NewsPageContent2>
      <TestLine>TEST Page</TestLine>
    </NewsPageContent2>
  );
}
