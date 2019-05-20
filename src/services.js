export function getNews() {
  return fetch("/news")
    .then(res => console.log(res))
    .then(res => res.json());
}

export function postNews(data) {
  return fetchNews("POST", data);
}

function fetchNews(method, data, id = "") {
  console.log(data);

  return fetch("/news/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
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
