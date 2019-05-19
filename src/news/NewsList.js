import React from "react";
import News from "./News";
import styled from "styled-components";
import { uid } from "react-uid";
//mport PropTypes from "prop-types";

const StyledSection = styled.section`
  align-self: center;
  overflow: scroll;
`;

export default function NewsList({ newsarray }) {
  return (
    <StyledSection>
      {newsarray.map(news => (
        <News key={uid(news)} title={news.title} content={news.content} />
      ))}
    </StyledSection>
  );
}
