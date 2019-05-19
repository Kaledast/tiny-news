import React from "react";
import NewsList from "./NewsList";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1546956222-dc66a867af22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
    no-repeat center center fixed;
  background-size: cover;
`;
//  background: #e7e8e3;

export default function NewsPage({ news }) {
  return (
    <NewsPageContent>
      <Header />
      <NewsList newsarray={news} />
      <Footer />
    </NewsPageContent>
  );
}
