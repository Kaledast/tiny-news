import React from "react";
import News from "./News";
import styled from "styled-components";

//mport PropTypes from "prop-types";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
`;

export default function NewsList({ removeFunction, newsarray }) {
  return (
    <StyledSection>
      {newsarray.map(article => (
        <News
          key={article.id}
          deleteNews={removeFunction}
          title={article.title}
          content={article.content}
          article={article}
          {...article}
        />
      ))}
    </StyledSection>
  );
}
