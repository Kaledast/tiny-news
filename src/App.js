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
  const { state, actions, auths, isAuth } = useContext(Context);

  function loadApiNews() {
    setIsLoading(true);
    getArticles(topic, search, country, apiKey)
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
  function handleSubmit(event, history) {
    event.preventDefault();
    handleApiKey(event.target.apikey.value);
    loadApiNews();
    event.target.apikey.value = "";
  }
  // 2) wird in loadApiNews aufgerufen und setzt State für Authenticated
  function keyValidation(data) {
    console.log("keyvalidation:", data);
    setToLocal("isAuthenticated", data.code !== "apiKeyInvalid");
    if (data.code === "apiKeyInvalid") {
      actions({
        type: "setState",
        payload: {
          ...state,
          value: "your key is is not valid, please try again"
        }
      });
    } else {
      auths({
        type: "setIsAuth",
        payload: { ...isAuth, value: true }
      });
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
  }

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  const ProtectedRoute = ({ isAuthenticated, ...props }) => {
    return isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />;
  };

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

/*
  function handleResponseStatus(responseStatus) {
    console.log("response status", responseStatus);
    if (responseStatus === 401 || responseStatus) {
      setToLocal("authenticated", false);
      setApiKey("");
    } else {
      setIsAuthenticated(true);
      setToLocal("authenticated", true);
    }
  }

export function validateKey(apiKey, handleResponseStatus) {
  const apiURL = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}`;
  const req = new Request(apiURL);
  console.log("validate");
  fetch(req).then(res => handleResponseStatus(res.status));
}
  */
