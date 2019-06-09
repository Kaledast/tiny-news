import React from "react";
import PropTypes from "prop-types";
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

export default function News({ article, onSave, saved }) {
  if (article !== "404") {
    const { title, content, description, url, urlToImage } = article;
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

          <ArticleTopic>{cleanTitle}</ArticleTopic>

          {urlToImage ? <StyledImage src={urlToImage} alt="" /> : ""}

          <ContentSection>{cleanContent}</ContentSection>
          <AuthorField href={url}>
            <LinkButton />
          </AuthorField>
        </DivWrapperInner>
      </DivWrapperOuter>
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

News.propTypes = {
  title: PropTypes.string, //isRequired erfüllt irgendwie nicht seinen Zweck
  content: PropTypes.string,
  handleSave: PropTypes.func,
  saved: PropTypes.bool
};
