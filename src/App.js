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

  /*useEffect(() => {
    setToLocal('filter', filter)
  }, [filter])
*/
  function loadApiNews() {
    getArticles()
      .then(data => {
        const parsedData = data.map(item => {
          const id = item.url + item.publishedAt;
          const saved = false;
          return {
            id,
            saved,
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
  //---------------------------------------------------
  // Save news in localstorage
  useEffect(() => {
    setToLocal("news", news);
  }, [news]);
  //---------------------------------------------------
  // helperfunktion findIndex,Of
  function findIndexOfNews(article) {
    const index = news.findIndex(item => item.id === article.id);
    return index;
  }

  //---------------------------------------------------
  // delete news und setNews
  function handleDeleteNews(article) {
    const index = findIndexOfNews(article);
    const newNews = [...news];
    newNews.splice(index, 1);
    setNews(newNews);
  }
  //---------------------------------------------------
  // save news (bookmark)
  function handleNewsBookmark(newsToSave) {
    const index = findIndexOfNews(newsToSave);
    setNews([
      ...news.slice(0, index),
      { ...newsToSave, saved: !newsToSave.saved },
      ...news.slice(index + 1)
    ]);

    console.log("saved the news!!!");
  }

  return (
    <div className="App">
      <NewsPage
        onNewsSave={handleNewsBookmark}
        handleRemove={handleDeleteNews}
        news={news}
      />
    </div>
  );
}

export default App;
