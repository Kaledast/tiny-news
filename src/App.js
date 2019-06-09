import React, { useState, useEffect } from "react";
import { setToLocal, getFromLocal, getArticles } from "./services.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import NewsPage from "./news/NewsPage.js";
import HomePage from "./home/HomePage.js";
import LoginPage from "./login/LoginPage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Appdiv from "./components/Appdiv.js";
import OptionsPage from "./options/OptionsPage.js";
import { ThemeProvider } from "styled-components";

function App() {
  // STATE
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState(getFromLocal("topic") || "general");
  const [apiKey, setApiKey] = useState(getFromLocal("apiKey"));
  const [validAuth, setValidAuth] = useState(false);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(getFromLocal("country") || "gb");
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState(getFromLocal("savedNews") || []);
  const [themeState, setThemeState] = useState(
    getFromLocal("themeState") || {
      mode: "normal"
    }
  );

  function loadApiNews(key) {
    setIsLoading(true);

    getArticles(topic, search, country, key)
      .then(data => {
        const success = keyValidation(data, key);
        setValidAuth(success);

        if (!success) {
          setIsLoading(false);
          return;
        }

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

  useEffect(() => {
    setToLocal("apiKey", apiKey);

    if (apiKey) {
      loadApiNews(apiKey);
    }
  }, [apiKey]);

  function handleSubmit(apiKey, history) {
    setApiKey(apiKey);
    history.replace("/");
  }

  function keyValidation(data, key) {
    if (data.code === "apiKeyInvalid") {
      setToLocal("apiKey", undefined);
      return false;
    } else if (data.status === "ok") {
      setApiKey(key);
      return true;
    } else {
      return false;
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
    setCountry(inputval);
    setToLocal("country", inputval);
  }

  function handleThemeSetting() {
    const mode = themeState.mode === "normal" ? `sepia` : `normal`;
    setThemeState({ mode: mode });
    setToLocal("themeState", { mode: mode });
  }

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  function returnKeyValidComponents() {
    const returnPage = validAuth ? (
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Appdiv className="App">
          <BrowserRouter>
            <Header
              onSearchSelect={handleSearchSelect}
              search={search}
              isAuthenticated={Boolean(apiKey)}
            />
            <Switch>
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
                    onCountrySelect={handleCountrySelect}
                    onToggleTheme={handleThemeSetting}
                    {...props}
                  />
                )}
              />
              <Route
                path="/"
                render={props => (
                  <HomePage onTopicSelect={handleTopicSelect} {...props} />
                )}
              />
            </Switch>
            <Footer isAuthenticated={Boolean(apiKey)} />
          </BrowserRouter>
        </Appdiv>
      </ThemeProvider>
    ) : (
      <Appdiv className="App">
        <BrowserRouter>
          <Header
            onSearchSelect={handleSearchSelect}
            search={search}
            isAuthenticated={validAuth}
          />
          <Switch>
            <Route
              path="/"
              render={props => <LoginPage onSubmit={handleSubmit} {...props} />}
            />
          </Switch>
          <Footer isAuthenticated={validAuth} />
        </BrowserRouter>
      </Appdiv>
    );
    return returnPage;
  }
  return returnKeyValidComponents();
}

export default App;
