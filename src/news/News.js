import React from "react";
import styled from "styled-components";
//mport PropTypes from "prop-types";
const NewsWrapper = styled.div`
  background: papayawhip;
  align-self: center;
  grid-column: 2/2;
  max-width: 500px;
  width: auto;
`;

const ArticleTopic = styled.h2`
  background: blue;
`;

const ContentSection = styled.section`
  background: purple;
`;

const DeleteButton = styled.button`
  background: black;
  color: white;
`;

export default function News() {
  return (
    <NewsWrapper>
      <ArticleTopic>Article Topic</ArticleTopic>
      <ContentSection>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </ContentSection>
      <DeleteButton>Del</DeleteButton>
    </NewsWrapper>
  );
}
