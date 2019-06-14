import React from 'react';
import moment from 'moment';
import NewsWrapperOuter from '../components/styled_news/NewsWrapperOuter.js';
import NewsWrapperInner from '../components/styled_news/NewsWrapperInner.js';
import NewsTopic from '../components/styled_news/NewsTopic.js';
import NewsContent from '../components/styled_news/NewsContent.js';
import NewsLink from '../components/styled_news/NewsLink.js';
import NewsAuthorField from '../components/styled_news/NewsAuthorField.js';
import NewsCheckBoxWrapper from '../components/styled_news/NewsCheckBoxWrapper.js';
import NewsCheckBoxLabel from '../components/styled_news/NewsCheckBoxLabel.js';
import NewsSavedCheckBox from '../components/styled_news/NewsSavedCheckBox.js';
import NewsImage from '../components/styled_news/NewsImage.js';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import theme from '../components/themes/theme.js';

function News({ article, onSave, saved }) {
  if (article !== '404') {
    const {
      title,
      content,
      description,
      url,
      urlToImage,
      publishedAt
    } = article;

    const date = moment(publishedAt).format('YYYY-MMM-DD');
    const cleanTitle = title && title.split('-')[0];
    let cleanContent = (content && content.split('[')[0]) || description;
    const invalidStrings = [
      ';;',
      '.:',
      `"..."`,
      '(,)',
      ',.,',
      `""`,
      '-:',
      '  ',
      '.,',
      ',,',
      ',.',
      '()',
      '%%',
      '//',
      '--'
    ];

    if (article.content !== null) {
      cleanContent = invalidStrings.some(substring =>
        cleanContent.includes(substring)
      )
        ? ''
        : cleanContent;
    }

    return (
      <ThemeProvider theme={theme}>
        <NewsWrapperOuter>
          <NewsWrapperInner>
            <NewsCheckBoxWrapper>
              <NewsSavedCheckBox
                onChange={() => onSave(article)}
                checked={Boolean(saved)}
                id='input'
                type='checkbox'
              />
              <NewsCheckBoxLabel htmlfor='input' />
            </NewsCheckBoxWrapper>
            <div id='date'>{date}</div>
            <NewsTopic>{cleanTitle}</NewsTopic>

            {urlToImage ? <NewsImage src={urlToImage} alt='' /> : ''}

            <NewsContent>{cleanContent}</NewsContent>
            <NewsAuthorField href={url}>
              <NewsLink />
            </NewsAuthorField>
          </NewsWrapperInner>
        </NewsWrapperOuter>
      </ThemeProvider>
    );
  } else {
    return (
      <NewsWrapperOuter>
        <NewsWrapperInner>
          <NewsTopic>{'No news available'}</NewsTopic>
          <NewsContent>
            {
              'Nothing new to report for your request, please choose something else'
            }
          </NewsContent>
        </NewsWrapperInner>
      </NewsWrapperOuter>
    );
  }
}

export default withTheme(News);

// ------- proptypes --------
News.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  handleSave: PropTypes.func,
  saved: PropTypes.bool
};
