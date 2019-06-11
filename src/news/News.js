import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import DivWrapperOuter from "../components/DivWrapperOuter.js";
import DivWrapperInner from "../components/DivWrapperInner.js";
import ArticleTopic from "../components/ArticleTopic.js";
import ContentSection from "../components/ContentSection.js";
import LinkButton from "../components/LinkButton.js";
import AuthorField from "../components/AuthorField.js";
import CheckBoxWrapper from "../components/CheckBoxWrapper.js";
import CheckBoxLabel from "../components/CheckBoxLabel.js";
import SavedCheckBox from "../components/SavedCheckBox.js";
import StyledImage from "../components/StyledImage.js";
import { ThemeProvider, withTheme } from "styled-components";
import theme from "../components/themes/theme.js";

function News({ article, onSave, saved }) {
  if (article !== "404") {
    const {
      title,
      content,
      description,
      url,
      urlToImage,
      publishedAt
    } = article;
    console.log(article);
    const date = moment(publishedAt).format("YYYY-MMM-DD");
    const cleanTitle = title && title.split("-")[0];
    let cleanContent = (content && content.split("[")[0]) || description;
    const invalidStrings = [
      ";;",
      ".:",
      `"..."`,
      "(,)",
      ",.,",
      `""`,
      "-:",
      "  ",
      ".,",
      ",,",
      ",.",
      "()",
      "%%",
      "//",
      "--"
    ];

    if (article.content !== null) {
      cleanContent = invalidStrings.some(substring =>
        cleanContent.includes(substring)
      )
        ? ""
        : cleanContent;
    }

    return (
      <ThemeProvider theme={theme}>
        <DivWrapperOuter>
          <DivWrapperInner>
            <CheckBoxWrapper>
              <SavedCheckBox
                onChange={() => onSave(article)}
                checked={Boolean(saved)}
                id="input"
                type="checkbox"
              />
              <CheckBoxLabel htmlfor="input" />
            </CheckBoxWrapper>
            <div id="date">{date}</div>
            <ArticleTopic>{cleanTitle}</ArticleTopic>

            {urlToImage ? <StyledImage src={urlToImage} alt="" /> : ""}

            <ContentSection>{cleanContent}</ContentSection>
            <AuthorField href={url}>
              <LinkButton />
            </AuthorField>
          </DivWrapperInner>
        </DivWrapperOuter>
      </ThemeProvider>
    );
  } else {
    return (
      <DivWrapperOuter>
        <DivWrapperInner>
          <ArticleTopic>{"No news available"}</ArticleTopic>
          <ContentSection>
            {
              "Nothing new to report for your request, please choose something else"
            }
          </ContentSection>
        </DivWrapperInner>
      </DivWrapperOuter>
    );
  }
}

export default withTheme(News);

News.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  handleSave: PropTypes.func,
  saved: PropTypes.bool
};
