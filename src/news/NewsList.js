import React from "react";
import News from "./News";
import StyledSectionList from "../components/StyledSectionList.js";
import PropTypes from "prop-types";

export default function NewsList({ onArticleSave, news, savedNews }) {
  let cleanedNews = news.filter(article => {
    return (
      article.content !== null &&
      article.urlToImage !== null &&
      article.content.split("%").length < 3
    );
  });

  if (cleanedNews.length < 1) {
    cleanedNews = ["404"];
  }

  return (
    <StyledSectionList>
      {cleanedNews.map(article => (
        <News
          key={article.id || "404 not found"}
          onSave={onArticleSave}
          article={article}
          saved={Boolean(savedNews.find(item => item.id === article.id))}
        />
      ))}
    </StyledSectionList>
  );
}

// ------- proptypes --------
NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.string,
        PropTypes.string,
        PropTypes.string,
        PropTypes.string,
        PropTypes.bool,
        PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.string, PropTypes.string])
        ),
        PropTypes.string,
        PropTypes.string
      ])
    )
  ),
  onArticleSave: PropTypes.func
};
