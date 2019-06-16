import React, { useState, useEffect } from 'react';
import { setToLocal, getFromLocal, getArticles } from './services.js';
import Header from './Header.js';
import Footer from './Footer.js';
import NewsPage from './news/NewsPage.js';
import HomePage from './home/HomePage.js';
import LoginPage from './login/LoginPage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appdiv from './components/Appdiv.js';
import OptionsPage from './options/OptionsPage.js';
import { ThemeProvider } from 'styled-components';
import ScrollMemory from 'react-router-scroll-memory';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState(getFromLocal('topic') || 'general');
  const [apiKey, setApiKey] = useState(getFromLocal('apiKey'));
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState(getFromLocal('country') || '');
  const [source, setSource] = useState(getFromLocal('source') || '');
  const [amount, setAmount] = useState(getFromLocal('amount') || 50);
  const [checkedId, setCheckedId] = useState(getFromLocal('checkedId') || '50');
  const [news, setNews] = useState([]);
  const [savedNews, setSavedNews] = useState(getFromLocal('savedNews') || []);
  const [validAuth, setValidAuth] = useState(
    getFromLocal('validAuth') || false
  );
  const [themeState, setThemeState] = useState(
    getFromLocal('themeState') || {
      mode: 'normal'
    }
  );

  function loadApiNews(key) {
    setIsLoading(true);

    getArticles(topic, search, country, source, amount, key)
      .then(data => {
        const success = keyValidation(data, key);
        setValidAuth(success);
        setToLocal('validAuth', success);

        if (!success) {
          setIsLoading(false);
          return;
        }

        const parsedData = data.articles.map(item => {
          return {
            id: item.url + item.publishedAt + item.title,
            saved: false,
            ...item
          };
        });
        const uniqueNews = distinctNews(parsedData, 'id');

        setNews(uniqueNews);
        setTimeout(() => {
          setIsLoading(false);
        }, 1300);
        return success;
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    setToLocal('apiKey', apiKey);
    if (apiKey) {
      loadApiNews(apiKey);
    }
  }, [apiKey]);

  function distinctNews(data, prop) {
    return data.filter((obj, pos, items) => {
      return items.map(news => news[prop]).indexOf(obj[prop]) === pos;
    });
  }

  function handleSubmit(apiKey, history) {
    setApiKey(apiKey);
    history.replace('/');
  }

  function keyValidation(data, key) {
    if (data.code === 'apiKeyInvalid') {
      setToLocal('apiKey', undefined);
      return false;
    } else if (data.status === 'ok') {
      setApiKey(key);
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    setToLocal('savedNews', savedNews);
  }, [savedNews]);

  function handleSaveNews(article) {
    const found = savedNews.find(item => item.id === article.id);
    setSavedNews(
      found ? savedNews.filter(item => found !== item) : [article, ...savedNews]
    );
  }

  function handleNewsPerPage(event, input) {
    console.log(event.target.id);
    setCheckedId(event.target.id);
    setToLocal('checkedId', event.target.id);
    setToLocal('amount', input);
    setAmount(input);
  }

  function handleTopicSelect(history, event, topic) {
    event.preventDefault();
    setTimeout(() => {
      history.push(`/news/${topic.id}`);
    }, 200);
    setTopic(topic);
    setToLocal('topic', topic);
    setSearch('');
    setSource('');
    setToLocal('source', '');
  }

  function handleSourcesSelect(inputval) {
    setSource(inputval);
    setToLocal('source', inputval);
    setCountry('');
    setSearch('');
    setTopic('');
  }

  function handleSearchSelect(search) {
    setSearch(search);
    setTopic('');
    setSource('');
  }

  function handleCountrySelect(inputval) {
    setCountry(inputval);
    setToLocal('country', inputval);
    setSource('');
    setToLocal('source', '');
    setSearch('');
    setTopic('');
  }

  function handleThemeSetting() {
    const mode = themeState.mode === 'normal' ? `sepia` : `normal`;
    setThemeState({ mode: mode });
    setToLocal('themeState', { mode: mode });
  }

  const filteredNews =
    news.length > 0 ? news.filter(item => !savedNews.includes(item.id)) : news;

  function returnKeyValidComponents() {
    const returnPage = validAuth ? (
      <Appdiv className='App'>
        <BrowserRouter>
          <ScrollMemory />

          <Header
            onSearchSelect={handleSearchSelect}
            search={search}
            isAuthenticated={validAuth}
          />
          <Switch>
            <Route
              path='/news/:topic?'
              render={props => (
                <NewsPage
                  loadingState={isLoading}
                  onNewsSave={handleSaveNews}
                  savedNews={savedNews}
                  news={filteredNews}
                  onLoadNews={loadApiNews}
                  {...props}
                />
              )}
            />
            <Route
              path='/saved'
              render={props => (
                <NewsPage
                  filterNews={filteredNews}
                  onNewsSave={handleSaveNews}
                  savedNews={savedNews}
                  news={savedNews}
                  {...props}
                />
              )}
            />
            <Route
              path='/options'
              render={props => (
                <OptionsPage
                  component={OptionsPage}
                  country={country}
                  source={source}
                  onCountrySelect={handleCountrySelect}
                  onSourcesSelect={handleSourcesSelect}
                  onToggleTheme={handleThemeSetting}
                  checked={checkedId}
                  onAmountChange={handleNewsPerPage}
                  themeState={themeState}
                  {...props}
                />
              )}
            />
            <Route
              path='/'
              render={props => (
                <HomePage onTopicSelect={handleTopicSelect} {...props} />
              )}
            />
          </Switch>
          <Footer isAuthenticated={validAuth} />
        </BrowserRouter>
      </Appdiv>
    ) : (
      <Appdiv className='App'>
        <BrowserRouter>
          <Header
            onSearchSelect={handleSearchSelect}
            search={search}
            isAuthenticated={validAuth}
          />
          <Switch>
            <Route
              path='/'
              render={props => (
                <LoginPage
                  isAuthenticated={validAuth}
                  onSubmit={handleSubmit}
                  {...props}
                />
              )}
            />
          </Switch>
          <Footer isAuthenticated={validAuth} />
        </BrowserRouter>
      </Appdiv>
    );

    return (
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        {returnPage}
      </ThemeProvider>
    );
  }
  return returnKeyValidComponents();
}

export default App;
