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

export default function SavedPage() {
  console.log("NewsPage Ebene:");

  return (
    <NewsPageContent2>
      <TestLine>Saved Page</TestLine>
    </NewsPageContent2>
  );
}
