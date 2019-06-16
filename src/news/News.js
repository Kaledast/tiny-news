import React from 'react';
import moment from 'moment';
import NewsWrapperOuter from '../components/styled_news/NewsWrapperOuter.js';
import NewsTopic from '../components/styled_news/NewsTopic.js';
import NewsContent from '../components/styled_news/NewsContent.js';
import NewsAuthorField from '../components/styled_news/NewsAuthorField.js';
import NewsCheckBoxWrapper from '../components/styled_news/NewsCheckBoxWrapper.js';
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
          <div>
            <NewsCheckBoxWrapper>
              <input
                onChange={() => onSave(article)}
                checked={Boolean(saved)}
                id='input'
                type='checkbox'
              />
              <label htmlFor='input' />
            </NewsCheckBoxWrapper>
            <div id='date'>{date}</div>
            <NewsTopic>{cleanTitle}</NewsTopic>

            {urlToImage ? <NewsImage src={urlToImage} alt='' /> : ''}

            <NewsContent>{cleanContent}</NewsContent>
            <NewsAuthorField href={url}>
              <div />
              read more...
            </NewsAuthorField>
          </div>
        </NewsWrapperOuter>
      </ThemeProvider>
    );
  } else {
    return (
      <NewsWrapperOuter>
        <div>
          <NewsTopic>{'No news available'}</NewsTopic>
          <NewsContent>
            {
              'Nothing new to report for your request, please choose something else'
            }
          </NewsContent>
        </div>
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
