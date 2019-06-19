import React, { useState, useEffect } from 'react';
import {
  setToLocal,
  getFromLocal,
  getArticles,
  getWeather,
  getWeatherLocation
} from './services.js';
import Header from './Header.js';
import Footer from './Footer.js';
import NewsPage from './news/NewsPage.js';
import HomePage from './home/HomePage.js';
import LoginPage from './login/LoginPage.js';
import WeatherPage from './weather/WeatherPage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Appdiv from './components/Appdiv.js';
import OptionsPage from './options/OptionsPage.js';
import { ThemeProvider } from 'styled-components';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiKey, setApiKey] = useState(getFromLocal('apiKey'));
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState(getFromLocal('country') || '');
  const [topic, setTopic] = useState(getFromLocal('topic') || 'general');
  const [source, setSource] = useState(getFromLocal('source') || '');
  const [amount, setAmount] = useState(getFromLocal('amount') || 50);
  const [news, setNews] = useState('');
  const [weather, setWeather] = useState('');
  const [location, setLocation] = useState(
    getFromLocal('location') || 'hamburg'
  );
  const [savedNews, setSavedNews] = useState(getFromLocal('savedNews') || []);
  const [validAuth, setValidAuth] = useState(
    getFromLocal('validAuth') || false
  );

  const [themeState, setThemeState] = useState(
    getFromLocal('themeState') || {
      mode: 'normal'
    }
  );

  function loadWeatherData() {
    getWeatherLocation(location)
      .then(values => {
        return values[0].woeid;
      })
      .then(location => {
        getWeather(location)
          .then(values => {
            console.log(values);
            const firstResult = values[0];
            const {
              id,
              humidity,
              weather_state_name,
              min_temp,
              max_temp
            } = firstResult;
            setWeather({
              id,
              humidity,
              weather_state_name,
              min_temp,
              max_temp
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadWeatherData();
  }, [location]);

  function loadApiNews(key) {
    setIsLoading(true);

    getArticles(topic, search, country, source, amount, key)
      .then(data => {
        const success = keyValidation(data, key);
        setValidAuth(success);
        console.log(validAuth);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  useEffect(() => setToLocal('savedNews', savedNews), [savedNews]);
  useEffect(() => setToLocal('amount', amount), [amount]);
  useEffect(() => setToLocal('country', country), [country]);
  useEffect(() => setToLocal('topic', topic), [topic]);
  useEffect(() => setToLocal('source', source), [source]);
  useEffect(() => setToLocal('validAuth', validAuth), [validAuth]);
  useEffect(() => setToLocal('location', location), [location]);

  function handleSaveNews(article) {
    const found = savedNews.find(item => item.id === article.id);
    setSavedNews(
      found ? savedNews.filter(item => found !== item) : [article, ...savedNews]
    );
  }

  function handleLocation(input) {
    console.log(input);
    setLocation(input);
  }

  function handleNewsPerPage(input) {
    setAmount(input);
  }

  function handleTopicSelect(history, event, topic) {
    event.preventDefault();
    setNews([]);
    setSearch('');
    setSource('');
    setTopic(topic);

    history.push(`/news/${topic}`);
  }

  function handleSourcesSelect(inputval) {
    setSource(inputval);
    setCountry('');
    setSearch('');
  }

  function handleSearchSelect(search) {
    setSearch(search);
    setSource('');
  }

  function handleCountrySelect(inputval) {
    setCountry(inputval);
    setSource('');
    setSearch('');
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
                  checked={amount}
                  onAmountChange={handleNewsPerPage}
                  themeState={themeState}
                  {...props}
                />
              )}
            />
            <Route
              path='/weather'
              render={props => (
                <WeatherPage
                  handleLocation={handleLocation}
                  weather={weather}
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
