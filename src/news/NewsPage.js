import React from "react";
import News from "./News";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

const NewsPageContent = styled.main`
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 50px auto 50px;
  background: papayawhip;
  height: 100vh;
`;

export default function NewsPage() {
  return (
    <NewsPageContent>
      <Header />
      <News />
      <Footer />
    </NewsPageContent>
  );
}
