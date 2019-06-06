import dotenv from "dotenv";
dotenv.config();

export function getArticles(topic, search, country, apiKey) {
  console.log("service called", apiKey);
  const url_apiKey = process.env.REACT_APP_API_KEY || apiKey;
  // const apiURL = `https://newsapi.org/v2/top-headlines?q=${search}&pageSize=100&country=${country}&category=${topic}&apiKey=${url_apiKey}`;
  const apiURL = `https://newsapi.org/v2/top-headlines?${
    search ? "q=" + search + "&" : ""
  }pageSize=100${
    country ? "&country=" + country + "&" : ""
  }category=${topic}&apiKey=${apiKey}`;

  const req = new Request(apiURL);

  return fetch(req)
    .then(res => res.json())
    .then(data => data);
}

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
