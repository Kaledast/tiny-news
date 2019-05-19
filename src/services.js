function fetchNews(method, data, id = "") {
  return fetch("/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

export function postNews(data) {
  return fetchNews("POST", data);
}

export function getNews(data) {
  return fetch("/").then(res => res.json());
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
