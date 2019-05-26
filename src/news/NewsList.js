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
  filterNews,
  onArticleSave,
  removeFunction,
  newsarray
}) {
  let renderedNews = newsarray.map(article => (
    <News
      key={article.id}
      saved={article.saved}
      handleSave={onArticleSave}
      deleteNews={removeFunction}
      article={article}
    />
  ));

  if (filter === "saved") {
    renderedNews = filterNews(renderedNews);
  }

  return <StyledSection>{renderedNews}</StyledSection>;
}
