import dotenv from 'dotenv';
dotenv.config();

export function getArticles(topic, search, country, source, amount, apiKey) {
  const url_apiKey = process.env.REACT_APP_API_KEY || apiKey;
  const apiURL = source
    ? `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${url_apiKey}`
    : `https://newsapi.org/v2/top-headlines?${
        search ? 'q=' + search + '&' : ''
      }pageSize=${amount}${country ? '&country=' + country : ''}${
        topic ? '&category=' + topic : ''
      }&apiKey=${url_apiKey}`;

  const req = new Request(apiURL);

  return fetch(req)
    .then(res => res.json())
    .then(data => data);
}

export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {}
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
