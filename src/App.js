import React, { useState, useEffect, useContext } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import Header from "./Header.js";
import Context from "./store/Context";
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
  const [isAuthenticated, setIsAuthenticated] = useState(
    getFromLocal("isAuthenticated" || false)
  );
  const [topic, setTopic] = useState("general");
  const [apiKey, setApiKey] = useState(getFromLocal("apiKey"));
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(getFromLocal("country") || "all");
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState(getFromLocal("savedNews") || []);
  const { state, stateSetting, auths, isAuth } = useContext(Context);

  function loadApiNews(key) {
    setIsLoading(true);

    getArticles(topic, search, country, key)
      .then(data => {
        keyValidation(data, key);
        const parsedData = data.articles.map(item => {
          return {
            id: item.url + item.publishedAt,
            saved: false,
            ...item
          };
        });
        setNews(parsedData);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    setToLocal("news", news);
  }, [news]);

  function handleSubmit(event) {
    event.preventDefault();
    handleApiKey(event.target.apikey.value);
    event.target.apikey.value = "";
    event.target.apikey.focus();
  }

  function handleApiKey(key) {
    loadApiNews(key);
  }

  function keyValidation(data, key) {
    setToLocal("isAuthenticated", data.code !== "apiKeyInvalid");
    setIsAuthenticated(data.code !== "apiKeyInvalid");
    console.log("validation:", isAuth.value, isAuthenticated);

    if (data.code === "apiKeyInvalid") {
      setToLocal("apiKey", "");
      stateSetting({
        type: "setState",
        input: {
          ...state,
          value: "your key is is not valid, please try again"
        }
      });
    } else if (data.status === "ok") {
      setIsAuthenticated(true);
      setToLocal("isAuthenticated", true);
      setToLocal("apiKey", key);

      auths({
        type: "setIsAuth",
        input: {
          ...isAuth,
          value: true
        }
      });
    } else {
      return;
    }
  }

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
    setSearch("");
  }

  function handleSearchSelect(search) {
    setSearch(search);
    setTopic("");
  }

  function handleCountrySelect(inputval) {
    console.log("handle country", inputval);
    setCountry(inputval);
    setToLocal("country", inputval);
  }

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
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
              <LoginPage handleSubmit={handleSubmit} {...props} />
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
                filterNews={filteredNews}
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
                component={OptionsPage}
                country={country}
                handleCountry={handleCountrySelect}
                {...props}
              />
            )}
          />
          <ProtectedRoute
            path="/"
            onTopicSelect={handleTopicSelect}
            component={HomePage}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Appdiv>
  );
}

export default App;
/*          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/options"
            component={OptionsPage}
            country={country}
            handleCountry={handleCountrySelect}
          />

            <Route
            path="/"
            render={props => (
              <HomePage onTopicSelect={handleTopicSelect} {...props} />
            )}
          />
          */
