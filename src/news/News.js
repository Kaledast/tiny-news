import React from "react";
import styled from "styled-components";
//mport PropTypes from "prop-types";
const NewsWrapper_outer = styled.div`
  display: flex;
  align-self: center;
  grid-column: 2/2;
  max-width: 500px;
  width: auto;
  padding: 13px;
  background: white;
  border-radius: 1%;
  box-shadow: 0px 0px 15px 2px #060606;
  border: 0.5px solid black;
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff7d4;
  border: 13px #ef925e solid;
  background: white;
  border-radius: 1%;
`;

const ArticleTopic = styled.h2`
  text-align: center;
  color: #060606;
`;

const ContentSection = styled.section``;

const DeleteButton = styled.button`
  background: #3c211a;
  margin: 10px;
  width: 50px;
  color: #ef925e;
`;

export default function News() {
  return (
    <NewsWrapper_outer>
      <NewsWrapper>
        <ArticleTopic>Article Topic</ArticleTopic>
        <ContentSection>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </ContentSection>
        <DeleteButton>Del</DeleteButton>
      </NewsWrapper>
    </NewsWrapper_outer>
  );
}
