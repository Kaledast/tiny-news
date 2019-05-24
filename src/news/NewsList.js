import React from "react";
import News from "./News";
import styled from "styled-components";

//mport PropTypes from "prop-types";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
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
  console.log(filter);
  if (filter === "saved") {
    renderedNews = filterNews(renderedNews);
  }

  return <StyledSection>{renderedNews}</StyledSection>;
}
/*
console.log(filterSetting);


*/
