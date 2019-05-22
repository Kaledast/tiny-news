import React, { useState, useEffect } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import NewsPage from "./news/NewsPage.js";
//import styled from "styled-components";
//import PropTypes from "prop-types";
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  // STATE
  const [news, setNews] = useState(getFromLocal("news") || []);
  //---------------------------------------------------
  // lifecycle start (=componentDidMount-method)
  useEffect(() => {
    loadApiNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadApiNews() {
    getArticles()
      .then(data => {
        const parsedData = data.map(item => {
          const id = item.url + item.publishedAt;

          console.log({
            id,
            ...item
          });
          return {
            id,
            ...item
          };
        });

        setNews(parsedData);
        //createApiNews(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  /*
   getArticles()
      .then(data => {
        const parsedData = data.map(item => {
          const id = item.url;

          return {
            id,
            ...data
          };
        });
        console.log(parsedData);
        setNews(parsedData);
        // createApiNews(data);
      })
      .catch(error => {
        console.log(error);
      });*/

  //---------------------------------------------------
  // Save news in localstorage
  useEffect(() => {
    setToLocal("news", news);
  }, [news]);
  //---------------------------------------------------
  // helperfunktion findIndex,Of
  function findIndexOfNews(article) {
    console.log(article.id, article.source.id);
    const index = news.findIndex(item => item.id === article.id);
    return index;
  }

  //---------------------------------------------------
  // delete news in mongo DB und setNews

  function handleDeleteNews(article) {
    const index = findIndexOfNews(article);
    const newNews = [...news];
    newNews.splice(index, 1);
    setNews(newNews);
  }

  return (
    <div className="App">
      <NewsPage handleRemove={handleDeleteNews} news={news} />
    </div>
  );
}

export default App;
