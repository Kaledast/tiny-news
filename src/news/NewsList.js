import React from "react";
import News from "./News";
import styled from "styled-components";

//mport PropTypes from "prop-types";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
`;

export default function NewsList({ onArticleSave, removeFunction, newsarray }) {
  return (
    <StyledSection>
      {newsarray.map(article => (
        <News
          key={article.id}
          saved={article.saved}
          handleSave={onArticleSave}
          deleteNews={removeFunction}
          title={article.title}
          content={article.content}
          timestamp={article.publishedAt}
          author={article.author}
          originalLink={article.url}
          article={article}
          {...article}
        />
      ))}
    </StyledSection>
  );
}
