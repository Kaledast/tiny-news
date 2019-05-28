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
  const [deleted, setDeleted] = useState(getFromLocal("deleted") || []);
  //---------------------------------------------------
  // lifecycle start (=componentDidMount-method)
  // Code-Review2 (brauche ich diesen Teil noch?)
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

  useEffect(() => {
    setToLocal("deleted", deleted);
  }, [deleted]);

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
        //setNews(parsedData);
        checkAlreadyDeletedNews(deleted, parsedData);
        //Code Review1!!!
        //anstatt: setNews(parsedData);
      })
      .catch(error => {
        console.log(error);
      });
  }
  //Code Review1!!!
  function checkAlreadyDeletedNews(deletedNews, ApiNews) {
    console.log("deleted News validierung", deletedNews);
    const deletedIDs = deletedNews.map(item => item.id);
    const ApiIDs = ApiNews.map(item => item.id);

    const validArticles = ApiIDs.filter(value => !deletedIDs.includes(value));
    //nehme nur Karten neu auf, die noch nicht in localstorage deleted wurden, da user diese offenbar nicht lesen möchte
    const validArticleArray = ApiNews.filter(item =>
      validArticles.includes(item.id)
    );
    console.log("checkfun locally deleted:", deletedIDs);
    console.log("checkfun valids:", validArticleArray);
    setNews(validArticleArray);
  }
  //---------------------------------------------------
  // Save news in localstorage
  useEffect(() => {
    setToLocal("news", news);
    console.log("localstorage of NEWS changed");
  }, [news]);

  useEffect(() => {
    setToLocal("savedNews", savedNews);
  }, [savedNews]);

  //---------------------------------------------------
  // helperfunktion findIndex,Of
  function findIndexOfNews(article, newsArray) {
    const index = newsArray.findIndex(item => item.id === article.id);

    return index;
  }

  //---------------------------------------------------
  // delete news und setNews
  function handleDeleteNews(article) {
    console.log(article);
    if (filter === "saved") {
      const indexSafed = findIndexOfNews(article, savedNews);
      setDeleted([...deleted, article]);

      const newSafedNews = [...savedNews];
      newSafedNews.splice(indexSafed, 1);
      setSavedNews(newSafedNews);
    } else {
      const index = findIndexOfNews(article, news);
      const newNews = [...news];

      setDeleted([...deleted, article]);
      newNews.splice(index, 1);
      setNews(newNews);
    }
  }

  //---------------------------------------------------
  // save news (bookmark) - kein Togglen mehr
  function handleNewsBookmark(newsToSave) {
    const index = findIndexOfNews(newsToSave, news);
    //delete Article that was bookmarked from News-List to show in saved-list only
    setNews([...news.slice(0, index), ...news.slice(index + 1)]);

    const newSavedNews = {
      ...newsToSave,
      saved: !newsToSave.saved
    };
    setSavedNews([...savedNews, newSavedNews]);
  }

  //---------------------------------------------------
  // Filter setzen
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
                onNewsSave={handleNewsBookmark}
                handleRemove={handleDeleteNews}
                safedNews={savedNews}
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
                onNewsSave={handleNewsBookmark}
                handleRemove={handleDeleteNews}
                safedNews={savedNews}
                news={news}
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
