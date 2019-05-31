import dotenv from "dotenv";
dotenv.config();

/*
          'q=Apple&' +
          'from=2019-05-29&' +
          'sortBy=popularity&' +
*/
//const HeadlineOption = "everything"; //"top-headlines" && "everything";

/*

https://newsapi.org/v2/sources?apiKey=ac3a791efaef4b87b7ab8ed0d4b6efed

`https://newsapi.org/v2/${HeadlineOption}?q=${topicTheme}&country=${country}&apiKey=ac3a791efaef4b87b7ab8ed0d4b6efed`;
*/

//https://newsapi.org/v2/everything?q=${topicTheme}&apiKey=${process.env.REACT_APP_API_KEY}
export function getArticles(topic, search, country, language) {
  console.log("api", search);
  const apiURL = `https://newsapi.org/v2/top-headlines?q=${search}&country=${country}&category=${topic}&language=${language}&apiKey=${
    process.env.REACT_APP_API_KEY
  }`;

  /*
  https://newsapi.org/v2/everything?language=en&country=us&apiKey=ac3a791efaef4b87b7ab8ed0d4b6efed
  https://newsapi.org/v2/everything?q=${topic}&language=${language}&country=${country}&apiKey=${
    process.env.REACT_APP_API_KEY
*/

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
