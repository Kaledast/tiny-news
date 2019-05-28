import React from "react";
import News from "./News";
import styled from "styled-components";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
  height: 100%;
`;

export default function NewsList({
  filter,
  onArticleSave,
  removeFunction,
  newsarray,
  safeNews
}) {
  let renderedNews = newsarray.map(article => (
    <News
      key={article.id}
      handleSave={onArticleSave}
      deleteNews={removeFunction}
      article={article}
    />
  ));
  //Code Review3 ersetze handleSave durch remove Function
  if (filter === "saved") {
    renderedNews = safeNews.map(article => (
      <News
        key={article.id}
        handleSave={removeFunction}
        deleteNews={removeFunction}
        article={article}
      />
    ));
  }

  return <StyledSection>{renderedNews}</StyledSection>;
}
