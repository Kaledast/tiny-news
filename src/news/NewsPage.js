import React from "react";
import NewsList from "./NewsList";
import Header from "../Header";
//import Footer from "../Footer";
import styled from "styled-components";

/*const NewsButton = styled.button`
  max-width: 50%;
  min-width: 40%;
  align-self: center;
  justify-content: space-between;
  background: #ef925e;
  font-weight: bold;
  margin: 20px;
  text-shadow: 2px 2px #ef925e;
  color: #060606;
  background: #3c211a;
  border: 2px solid #3c211a;
  box-shadow: 0px 0px 3px #3c211a;
`;
*/

const NewsPageContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1546956222-dc66a867af22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
    no-repeat center center fixed;
  background-size: cover;
`;

export default function NewsPage({ handleRemove, news }) {
  return (
    <NewsPageContent>
      <Header />
      <NewsList removeFunction={handleRemove} newsarray={news} />
    </NewsPageContent>
  );
}
