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
  const { state, stateSetting, auths, isAuth, Key } = useContext(Context);

  function loadApiNews(key) {
    setIsLoading(true);
    // const key = !isAuthenticated ? Key.value : apiKey ? apiKey : Key.value;
    console.log("key in load api", key);
    getArticles(topic, search, country, key)
      .then(data => {
        keyValidation(data);
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

  /*
   key = "ac3a791efaef4b87b7ab8ed0d4b6efed";
*/
  // 1) wird in login aufgerufen und setzt den key zur überprüfung
  function handleSubmit(event) {
    event.preventDefault();
    handleApiKey(event.target.apikey.value);
    event.target.apikey.value = "";
    event.target.apikey.focus();
  }
  // 2) wird in loadApiNews aufgerufen und setzt State für Authenticated
  function keyValidation(data) {
    //from Local is delayed (fail)
    setToLocal("isAuthenticated", data.code !== "apiKeyInvalid");

    //from Context
    if (data.code === "apiKeyInvalid") {
      stateSetting({
        type: "setState",
        input: {
          ...state,
          value: "your key is is not valid, please try again"
        }
      });
    } else if (data.status === "ok") {
      auths({
        type: "setIsAuth",
        input: { ...isAuth, value: true }
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
    setCountry(inputval);
  }

  function handleApiKey(key) {
    setToLocal("apiKey", key);
    console.log("app key set here:", key);
    loadApiNews(key);
  }

  function validateKey(key) {
    loadApiNews(key);
  }

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  const ProtectedRoute = ({ isAuthenticated, ...props }) => {
    return isAuth.value || isAuthenticated ? (
      <Route {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };

  return (
    <Appdiv className="App">
      <BrowserRouter>
        <Header onSearchSelect={handleSearchSelect} search={search} />
        <Switch>
          <Route
            path="/login"
            render={props => (
              <LoginPage
                keyValidation={validateKey}
                handleSubmit={handleSubmit}
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
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/options"
            component={OptionsPage}
            country={country}
            handleCountrySelect={handleCountrySelect}
          />

          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/"
            component={HomePage}
            onTopicSelect={handleTopicSelect}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Appdiv>
  );
}

export default App;
