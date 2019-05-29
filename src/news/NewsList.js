import React from "react";
import News from "./News";
import styled from "styled-components";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
  height: 100%;
`;

export default function NewsList({ onArticleSave, news, savedNews }) {
  return (
    <StyledSection>
      {news.map(article => (
        <News
          key={article.id}
          onSave={onArticleSave}
          article={article}
          saved={Boolean(savedNews.find(item => item.id === article.id))}
        />
      ))}
    </StyledSection>
  );
}
