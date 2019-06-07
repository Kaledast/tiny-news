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
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   getFromLocal("isAuthenticated") || false
  // );
  const [topic, setTopic] = useState("general");
  const [apiKey, setApiKey] = useState(getFromLocal("apiKey"));
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(getFromLocal("country") || "all");
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState(getFromLocal("savedNews") || []);
  // const { state, stateSetting, authSetting, isAuth } = useContext(Context);

  function loadApiNews(key) {
    setIsLoading(true);

    getArticles(topic, search, country, key)
      .then(data => {
        const success = keyValidation(data, key);

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
    // setToLocal("isAuthenticated", data.code !== "apiKeyInvalid");
    // setIsAuthenticated(data.code !== "apiKeyInvalid");

    if (data.code === "apiKeyInvalid") {
      setToLocal("apiKey", undefined);
      return false;
      // stateSetting({
      //   type: "setState",
      //   input: {
      //     ...state,
      //     value: "your key is is not valid, please try again"
      //   }
      // });
    } else if (data.status === "ok") {
      // setIsAuthenticated(true);
      // setToLocal("isAuthenticated", true);
      setApiKey(key);
      return true;

      // authSetting({
      //   type: "setIsAuth",
      //   input: {
      //     ...isAuth,
      //     value: true
      //   }
      // });
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

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        apiKey ? (
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
        <Header
          onSearchSelect={handleSearchSelect}
          search={search}
          isAuthenticated={Boolean(apiKey)}
        />
        <Switch>
          <Route
            path="/login"
            render={props => <LoginPage onSubmit={handleSubmit} {...props} />}
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
        <Footer isAuthenticated={Boolean(apiKey)} />
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
