import React from "react";
import NewsList from "./NewsList";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;

  background: #e7e8e3;
  font-family: sans-serif;
  height: 100vh;
  overflow-y: auto;
`;

export default function NewsPage({ news }) {
  return (
    <NewsPageContent>
      <Header />
      <NewsList newsarray={news} />
      <Footer />
    </NewsPageContent>
  );
}
