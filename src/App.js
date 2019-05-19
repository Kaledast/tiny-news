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
  return (
    <div className="App">
      <NewsPage news={news} />
    </div>
  );
}

export default App;
