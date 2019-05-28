import React from "react";
import NewsList from "./NewsList";
import styled from "styled-components";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export default function NewsPage({
  filter,
  onNewsSave,
  handleRemove,
  safedNews,
  news
}) {
  return (
    <NewsPageContent>
      <NewsList
        filter={filter}
        onArticleSave={onNewsSave}
        removeFunction={handleRemove}
        safeNews={safedNews}
        newsarray={news}
      />
    </NewsPageContent>
  );
}
