const News = require("./models/News");
const setupServer = require("./setup-server");

const app = setupServer();

app.get("/news", (req, res) => {
  console.log("Hallo");
  News.find()
    .then(news => res.json(news))
    .catch(err => res.json(err));
});

app.post("/news", (req, res) => {
  console.log(req.body);
  News.create(req.body)
    .then(news => res.json(news))
    .catch(err => res.json(err));
});
