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
export function getArticles(props) {
  const topicTheme = props;
  const apiURL = `https://newsapi.org/v2/sources?q=${topicTheme}&apiKey=${
    process.env.REACT_APP_API_KEY
  }`;

  const req = new Request(apiURL);

  return fetch(req)
    .then(res => res.json())
    .then(data => data.articles);
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
