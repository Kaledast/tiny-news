import dotenv from "dotenv";
dotenv.config();
/*
console.log(
  `https://newsapi.org/v2/top-headlines?country=de&apiKey=
    ${process.env.REACT_APP_API_KEY}`
);
*/
export function getArticles() {
  const apiURL = `https://newsapi.org/v2/top-headlines?country=de&apiKey=ac3a791efaef4b87b7ab8ed0d4b6efed`;

  const req = new Request(apiURL);

  return fetch(req)
    .then(res => res.json())
    .then(data => data.articles)
    .then(console.log("GET articles"));
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
