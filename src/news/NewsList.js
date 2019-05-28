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
  newsarray,
  safeNews
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

  let rendereSafedNews = safeNews.map(article => (
    <News
      key={article.id}
      saved={article.saved}
      handleSave={onArticleSave}
      deleteNews={removeFunction}
      article={article}
    />
  ));

  console.log("Newslist", safeNews);
  if (filter === "saved") {
    renderedNews = rendereSafedNews; //filterNews(renderedNews);
    console.log("this is filter;", filter);
  }

  return <StyledSection>{renderedNews}</StyledSection>;
}
