import React from "react";
import NewsList from "./NewsList";
import NewsPageContent from "../components/NewsPageContent.js";

export default function SavedPage({
  filter,
  filterNews,
  onNewsSave,
  handleRemove,
  news,
  newssaved
}) {
  return (
    <NewsPageContent>
      <NewsList
        filter={filter}
        filterNews={filterNews}
        onArticleSave={onNewsSave}
        removeFunction={handleRemove}
        newsarray={news}
        newsarraySafed={newssaved}
      />
    </NewsPageContent>
  );
}
