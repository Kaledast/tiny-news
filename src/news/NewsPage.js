import React, { useEffect } from "react";
import NewsList from "./NewsList";
import NewsPageContent from "../components/NewsPageContent.js";
import Loading from "./Loading.js";
import { getFromLocal } from "../services";
import { ThemeProvider, withTheme } from "styled-components";
import theme from "../components/themes/theme.js";

function NewsPage({
  loadingState,
  onNewsSave,
  savedNews,
  news,
  match,
  onLoadNews
}) {
  const { topic } = match.params;

  useEffect(() => {
    onLoadNews && onLoadNews(getFromLocal("apiKey"));
  }, [topic]);

  function loading() {
    const returnComponent = loadingState ? (
      <Loading />
    ) : (
      <NewsPageContent>
        <NewsList
          onArticleSave={onNewsSave}
          savedNews={savedNews}
          news={news}
        />
      </NewsPageContent>
    );
    return <ThemeProvider theme={theme}>{returnComponent}</ThemeProvider>;
  }

  return loading();
}
export default withTheme(NewsPage);
