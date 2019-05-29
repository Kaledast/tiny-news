import React, { useEffect } from "react";
import NewsList from "./NewsList";
import styled from "styled-components";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export default function NewsPage({
  showSaved,
  onNewsSave,
  onNewsRemove,
  savedNews,
  news,
  match,
  onLoadNews
}) {
  const {
    params: { topic }
  } = match;

  useEffect(() => {
    onLoadNews && onLoadNews(topic || "general");
  }, [topic]);

  return (
    <NewsPageContent>
      <NewsList
        onArticleSave={onNewsSave}
        onArticleRemove={onNewsRemove}
        savedNews={savedNews}
        news={news}
      />
    </NewsPageContent>
  );
}
