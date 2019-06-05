import React, { useState, useEffect } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import NewsPage from "./news/NewsPage.js";
import HomePage from "./home/HomePage.js";
import LoginPage from "./login/LoginPage.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
  const [authenticated, setIsAuthenticated] = useState(false);
  const [topic, setTopic] = useState("");
  const [apiKey, setApiKey] = useState(getFromLocal("apiKey"));
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(getFromLocal("country") || "all");
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState(getFromLocal("savedNews") || []);

  function loadApiNews() {
    setIsLoading(true);
    getArticles(topic, search, country, apiKey, handleResponseStatus)
      .then(data => {
        const parsedData = data.articles.map(item => {
          return {
            id: item.url + item.publishedAt,
            saved: false,
            ...item
          };
        });
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
    setToLocal("country", country);
    loadApiNews();
  }, [country]);

  useEffect(() => {
    setToLocal("apiKey", apiKey);
  }, [apiKey]);

  useEffect(() => {
    setToLocal("savedNews", savedNews);
  }, [savedNews]);

  function handleResponseStatus(responseStatus) {
    setIsAuthenticated(responseStatus === 401 ? false : true);

    console.log(responseStatus);
  }

  function handleNewsBookmark(article) {
    const found = savedNews.find(item => item.id === article.id);
    setSavedNews(
      found ? savedNews.filter(item => found !== item) : [...savedNews, article]
    );
  }

  function handleTopicSelect(topic) {
    setTopic(topic);
    setSearch("");
  }

  function handleSearchSelect(search) {
    setSearch(search);
    setTopic("");
  }

  function handleCountrySelect(inputval) {
    setCountry(inputval);
  }

  function handleApiKey(key) {
    setApiKey(key);
    loadApiNews();
    console.log(apiKey);
  }

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  function handleIsAuth() {
    return authenticated;
  }

  const ProtectedRoute = ({ component: LoginPage, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        apiKey ? (
          <LoginPage handleApiKey={handleApiKey} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <Appdiv className="App">
      <BrowserRouter>
        <Header onSearchSelect={handleSearchSelect} search={search} />

        <Switch>
          <Route
            path="/login"
            render={props => (
              <LoginPage
                handleIsAuth={handleIsAuth}
                handleApiKey={handleApiKey}
                {...props}
              />
            )}
          />
          <Route
            path="/news/:topic?"
            render={props => (
              <NewsPage
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
