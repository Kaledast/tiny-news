import React, { useEffect } from "react";
import NewsList from "./NewsList";
import styled from "styled-components";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export default function NewsPage({
  onNewsSave,
  savedNews,
  news,
  match,
  onLoadNews
}) {
  const { topic } = match.params;

  useEffect(() => {
    onLoadNews && onLoadNews(topic || "general");
  }, [topic]);

  return (
    <NewsPageContent>
      <NewsList onArticleSave={onNewsSave} savedNews={savedNews} news={news} />
    </NewsPageContent>
  );
}
