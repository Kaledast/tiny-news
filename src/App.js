import React, { useState, useEffect } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import NewsPage from "./news/NewsPage.js";
import HomePage from "./home/HomePage.js";
import LoginPage from "./login/LoginPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import img from "./news/images/img3.jpg";
import OptionsPage from "./options/OptionsPage.js";

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
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("");
  const [newsFound, setNewsFound] = useState(true);
  const [apiKey, setApiKey] = useState(getFromLocal("apiKey"));
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(getFromLocal("country") || "all");
  const [news, setNews] = useState(getFromLocal("news") || []);
  const [savedNews, setSavedNews] = useState(getFromLocal("savedNews") || []);

  function loadApiNews() {
    setIsLoading(true);
    getArticles(topic, search, country)
      .then(data => {
        handleNewsNotFound(data);
        const parsedData = newsFound
          ? data.articles.map(item => {
              return {
                id: item.url + item.publishedAt,
                saved: false,
                ...item
              };
            })
          : [
              {
                author: null,
                content:
                  "Nothing new to report for this topic, please choose something else",
                description: "",
                id: "404",
                publishedAt: "404",
                saved: false,
                source: { id: null, name: null },
                title: "No news available",
                url: null,
                failed: true,
                urlToImage: null
              }
            ];
        console.log("parsed", parsedData);
        console.log("newsFound in load Api News", newsFound);
        setNews(parsedData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    setToLocal("news", news);
    setIsLoading(false);
  }, [news]);

  useEffect(() => {
    loadApiNews();
  }, [country, search]);

  useEffect(() => {
    setToLocal("apiKey", apiKey);
  }, [apiKey]);

  useEffect(() => {
    setToLocal("country", country);
  }, [country]);

  useEffect(() => {
    setToLocal("savedNews", savedNews);
  }, [savedNews]);

  function handleNewsBookmark(article) {
    const found = savedNews.find(item => item.id === article.id);
    setSavedNews(
      found ? savedNews.filter(item => found !== item) : [...savedNews, article]
    );
  }

  function handleTopicSelect(topic) {
    setTopic(topic);
  }

  function handleSearchSelect(search) {
    setSearch(search);
  }

  function handleCountrySelect(inputval) {
    setCountry(inputval);
  }

  function handleNewsNotFound(data) {
    setNewsFound(data.articles.length > 0);
  }

  function handleApiKey(key) {
    setApiKey(key);
  }

  const filteredNews = news.filter(item => !savedNews.includes(item.id));

  if (!apiKey) {
    return (
      <Appdiv className="App">
        <LoginPage onSubmit={handleApiKey} />
      </Appdiv>
    );
  }

  return (
    <Appdiv className="App">
      <BrowserRouter>
        <Header onSearchSelect={handleSearchSelect} search={search} />

        <Switch>
          <Route
            path="/news/:topic?"
            render={props => (
              <NewsPage
                foundState={newsFound}
                loadingState={isLoading}
                onNewsSave={handleNewsBookmark}
                savedNews={savedNews}
                news={filteredNews}
                onLoadNews={loadApiNews}
                {...props}
              />
            )}
          />
          <Route
            path="/saved"
            render={props => (
              <NewsPage
                onNewsSave={handleNewsBookmark}
                savedNews={savedNews}
                news={savedNews}
                {...props}
              />
            )}
          />
          <Route
            path="/options"
            render={props => (
              <OptionsPage
                country={country}
                handleCountrySelect={handleCountrySelect}
                {...props}
              />
            )}
          />
          <Route
            path="/"
            render={props => (
              <HomePage {...props} onTopicSelect={handleTopicSelect} />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Appdiv>
  );
}

export default App;
