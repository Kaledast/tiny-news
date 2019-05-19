import React from "react";
import styled from "styled-components";
//mport PropTypes from "prop-types";
const NewsWrapperOuter = styled.section`
 
  display: flex;
  align-self: center;
  max-width: 500px;
  width: auto;
  padding: 13px;
  background: #060606;
  border-radius: 1%;
  border: 0.5px solid black;
`;
const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff7d4;
  border: 13px #ef925e solid;
  background: white;
  border-radius: 1%;
  box-shadow: 0px 0px 15px 2px #060606;
  overflow-y: scroll;
`;

const ArticleTopic = styled.h2`
  text-align: center;
  color: #060606;
`;

const ContentSection = styled.section`
  margin: 4px;
`;

const DeleteButton = styled.button`
  background: #3c211a;
  margin: 10px;
  width: 50px;
  color: #ef925e;
`;

export default function News({ title, content }) {
  return (
    <NewsWrapperOuter>
      <NewsWrapper>
        <ArticleTopic>{title}</ArticleTopic>
        <ContentSection>{content}</ContentSection>
        <DeleteButton>delete</DeleteButton>
      </NewsWrapper>
    </NewsWrapperOuter>
  );
}
