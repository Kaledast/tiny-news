import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import NewsPage from "./news/NewsPage.js";

//import styled from "styled-components";
//mport PropTypes from "prop-types";

function App() {
  const [news, setNews] = useState([
    {
      title: "art1 title",
      content:
        "nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era"
    },
    {
      title: "art2 title",
      content:
        "lorem ipsum nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era"
    },
    {
      title: "art3 title",
      content:
        "lorem ipsum nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era"
    },
    {
      title: "art3 title",
      content:
        "lorem ipsum nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam era"
    }
  ]);
  //useState(getFromLocal("cards") || []);
  return (
    <div className="App">
      <NewsPage news={news} />
    </div>
  );
}

export default App;
