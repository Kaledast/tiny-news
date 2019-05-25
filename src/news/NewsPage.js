import React from "react";
import NewsList from "./NewsList";
//import Footer from "../Footer";
import styled from "styled-components";
import img1 from "./images/img1.jpg";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background: url(${img1}) no-repeat center center fixed;
  background-size: cover;
`;

//url("https://images.unsplash.com/photo-1546956222-dc66a867af22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
export default function NewsPage({
  filter,
  filterNews,
  onNewsSave,
  handleRemove,
  news
}) {
  return (
    <NewsPageContent>
      <NewsList
        filter={filter}
        filterNews={filterNews}
        onArticleSave={onNewsSave}
        removeFunction={handleRemove}
        newsarray={news}
      />
    </NewsPageContent>
  );
}
