const apiURL =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2019-05-12&" +
  "sortBy=popularity&" +
  "apiKey=ac3a791efaef4b87b7ab8ed0d4b6efed";

export function getArticles() {
  const req = new Request(apiURL);

  return fetch(req)
    .then(res => res.json())
    .then(data => data.articles)
    .then(console.log("GET articles"));
}
/*
function fetchArticles(method, data) {
  console.log(data);

  return fetch(apiURL, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function postArticles(data) {
  return fetchArticles("POST", data);
}

export function getNews() {
  return fetch("/news").then(res => res.json());
}

export function postNews(data) {
  console.log("Post articles");
  return fetchNews("POST", data);
}

export function deleteNews(data) {
  console.log("id in services.js falsch gesetzt bei delete?");
  return fetchNews("DELETE", data, data._id);
}

function fetchNews(method, data, id = "") {
  console.log(data, id);

  return fetch("/news/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
*/
export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {
    console.log(err);
  }
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
