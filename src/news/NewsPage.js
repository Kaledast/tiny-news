import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import NewsPageContent from '../components/styled_news/NewsPageContent.js';
import Loading from './Loading.js';

import { getFromLocal } from '../services';

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
    onLoadNews(getFromLocal('apiKey'), topic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    return returnComponent;
  }

  return loading();
}
export default NewsPage;
