import React, { useState, useEffect } from "react";
import {
  setToLocal,
  getFromLocal,
  postNews,
  getNews,
  deleteNews
} from "./services.js";
import NewsPage from "./news/NewsPage.js";

//import styled from "styled-components";
//import PropTypes from "prop-types";
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  // STATE
  const [news, setNews] = useState(getFromLocal("news") || []);

  /*useState([
    {
      title: "Britische Drogen-Oma will einfach nur noch sterben",
      content:
        "Seit mehr als sechs Jahren sitzt Lindsay Sandiford (62) im Todes-Knast auf Bali und wartet auf ihre Hinrichtung. Die britische Drogen-Oma, die 2013 wegen Heroin-Schmuggels zum Tode verurteilt wurde, hat die Hoffnung auf eine Begnadigung endgültig aufgegeben. Ihre Zellennachbarin hat jetzt verraten: Sandiford wolle es einfach nur noch hinter sich bringen – sie sei bereit zu sterben.)"
    },
    {
      title: "Warum springen Hunde von dieser Brücke in den Tod?",
      content:
        "50 Hunde, schätzen Einheimische, sprangen in den vergangenen fünf Jahrzehnten von der Overtoun-Brücke bei Glasgow in den Tod. Weil böse Geister sie lockten, glauben abergläubische Schotten: Der Geist der unglücklichen Lady Overtoun gehe dort um, auch der Geist eines Babys, das ein Vater einst von der Brücke warf."
    },
    {
      title: "Im Feldstraßen-Bunker regnet es durchs Dach",
      content:
        "Die Bauarbeiten auf dem Bunker haben begonnen - doch einige Mieter bangen um ihre Existenz. Außerdem: Der HSV gewinnt vergebens"
    }
  ]);
  */
  //

  //---------------------------------------------------
  // lifecycle start (=componentDidMount-method)
  useEffect(() => {
    loadNews();
  }, []);
  // load news from localstorage
  function loadNews() {
    getNews()
      .then(data => setNews(data))
      .catch(error => console.log(error));
  }
  //---------------------------------------------------
  // Save news in localstorage
  useEffect(() => {
    setToLocal("news", news);
  }, [news]);
  //---------------------------------------------------
  // save news in mongo DB und setNews
  const createNews = data => {
    postNews(data)
      .then(newNews => {
        setNews([...news, newNews]);
      })
      .catch(error => console.log(error));
  };

  //---------------------------------------------------
  // helperfunktion findIndexOf
  function findIndexOfNews(article) {
    const index = news.findIndex(item => item._id === article._id);
    return index;
  }

  //---------------------------------------------------
  // delete news in mongo DB und setNews

  function handleDeleteNews(article) {
    const index = findIndexOfNews(article);
    const newNews = [...news];
    newNews.splice(index, 1);

    setNews(newNews);

    deleteNews(article).catch(error => console.log(error));
  }

  return (
    <div className="App">
      <NewsPage
        handleRemove={handleDeleteNews}
        handleDB={data => createNews(data)}
        news={news}
      />
    </div>
  );
}

export default App;
