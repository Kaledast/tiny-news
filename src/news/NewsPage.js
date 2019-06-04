import React, { useEffect } from "react";
import NewsList from "./NewsList";
import styled from "styled-components";
import Loading from "./Loading.js";

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export default function NewsPage({
  loadingState,
  onNewsSave,
  savedNews,
  news,
  match,
  onLoadNews,
  foundState
}) {
  const { topic, search } = match.params;

  useEffect(() => {
    onLoadNews && onLoadNews(topic || search || "general");
  }, [topic, search]);
  console.log("news in Newspage", news);

  function loading() {
    const returnComponent = loadingState ? (
      <Loading />
    ) : (
      <NewsPageContent>
        <NewsList
          onArticleSave={onNewsSave}
          foundState={foundState}
          savedNews={savedNews}
          news={news}
        />
      </NewsPageContent>
    );
    return returnComponent;
  }

  return loading();
}
