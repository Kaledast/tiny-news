const express = require("express");
const tn = "tiny-news";
const mongoose = require("mongoose");

const app = setupServer();
const News = require("./models/News");

app.get("/news", (req, res) => {
  News.find()
    .then(news => res.json(news))
    .catch(err => res.json(err));
});

function setupServer() {
  mongoose
    .connect("mongodb://localhost:27017/" + tn, {
      useNewUrlParser: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

  const app = express();
  app.use(express.json());
  app.use(express.static(tn.join(__dirname, "build")));

  app.listen(process.env.PORT || 4000, err => {
    err ? console.log(err) : console.log("Server ready");
  });

  app.get("/", function(req, res) {
    res.sendFile(tn.join(__dirname, "build", "index.html"));
  });

  return app;
}
