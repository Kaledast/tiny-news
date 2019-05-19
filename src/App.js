import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { setToLocal, getFromLocal, postNews, getNews } from "./services.js";
import NewsPage from "./news/NewsPage.js";

//import styled from "styled-components";
//mport PropTypes from "prop-types";

function App() {
  //STATE
  const [news, setNews] = useState(getFromLocal("news") || []);

  //---------------------------------------------------
  //lifecycle start (=component did mount-method)
  useEffect(() => {
    loadNews();
  }, []);
  //load news from localstorage
  function loadNews() {
    getNews()
      .then(data => setNews(data))
      .catch(error => console.log(error));
  }
  //---------------------------------------------------
  //Save news in localstorage
  useEffect(() => {
    setToLocal("news", news);
  }, [news]);
  //---------------------------------------------------
  // save news in mogo DB
  const createNews = (data, history) => {
    postNews(data)
      .then(newNews => {
        setNews([...news, newNews]);
        // history.push("/"); <- for routing later
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <NewsPage onDraw={data => console.log(createNews(data))} news={news} />
    </div>
  );
}

export default App;
