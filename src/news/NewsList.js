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
      handleSave={onArticleSave}
      deleteNews={removeFunction}
      article={article}
    />
  ));

  let rendereSafedNews = safeNews.map(article => (
    <News
      handleSave={onArticleSave}
      deleteNews={removeFunction}
      article={article}
    />
  ));

  if (filter === "saved") {
    renderedNews = rendereSafedNews;
  }

  return <StyledSection>{renderedNews}</StyledSection>;
}
