import React, { useState, useEffect } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import NewsPage from "./news/NewsPage.js";
import HomePage from "./home/HomePage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import img from "./news/images/img3.jpg";

const Appdiv = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${img});
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;

function App() {
  // STATE
  const [news, setNews] = useState(getFromLocal("news") || []);
  const [filter, setFilter] = useState(getFromLocal("filter") || "all");
  const [savedNews, setSavedNews] = useState(getFromLocal("savedNews") || []);
  const [rubrik, setRubrik] = useState("general");

  //---------------------------------------------------
  // lifecycle start (=componentDidMount-method)
  useEffect(() => {
    loadApiNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    loadApiNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rubrik]);

  useEffect(() => {
    setToLocal("filter", filter);
  }, [filter]);

  function loadApiNews() {
    getArticles(rubrik)
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

  useEffect(() => {
    setToLocal("savedNews", savedNews);
  }, [savedNews]);

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
    setSavedNews([...savedNews, newsToSave]);
  }
  //---------------------------------------------------
  // filter news

  function handlefilterNews(newsarray) {
    const savedNews = newsarray.filter(item => item.props.saved);
    return savedNews;
  }

  function handleFilterSetting(filter) {
    setFilter(filter);
  }

  //---------------------------------------------------
  // rubriken setzen
  function collectApiSettings(values) {
    setRubrik(values);
    console.log(values);
  }

  return (
    <Appdiv className="App">
      <BrowserRouter>
        <Header handleFilter={handleFilterSetting} />
        <Switch>
          <Route
            path="/news"
            render={props => (
              <NewsPage
                filter={filter}
                filterNews={handlefilterNews}
                onNewsSave={handleNewsBookmark}
                handleRemove={handleDeleteNews}
                news={news}
                {...props}
              />
            )}
          />
          <Route
            path="/saved"
            render={props => (
              <NewsPage
                filter={filter}
                filterNews={handlefilterNews}
                onNewsSave={handleNewsBookmark}
                handleRemove={handleDeleteNews}
                news={savedNews}
                {...props}
              />
            )}
          />
          <Route
            path="/"
            render={props => (
              <HomePage rubrikFunktion={collectApiSettings} {...props} />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Appdiv>
  );
}

export default App;
