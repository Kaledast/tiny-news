import React, { useState, useEffect } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import Header from "./Header.js";
import NewsPage from "./news/NewsPage.js";
import SavedPage from "./news/SavedPage.js";
import TestPage from "./news/TestPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Footer from "./Footer.js";
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
    setToLocal("filter", filter);
  }, [filter]);
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
  }
  //---------------------------------------------------
  // filter news
  function filterNews(newsarray) {
    //const filteredNews = newsarray.filter(article => article.saved===true);
    //console.log(newsarray.filter(item => item.saved));

    return newsarray.filter(item => item.saved);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={TestPage} />
          <Route
            path="/news"
            render={props => (
              <NewsPage
                handleFilter={filterNews}
                onNewsSave={handleNewsBookmark}
                handleRemove={handleDeleteNews}
                news={news}
                {...props}
              />
            )}
          />
          <Route path="/saved" component={SavedPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
