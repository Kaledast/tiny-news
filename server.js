const News = require("./models/News");
//const dbConn = mongodb.MongoClient.connect("mongod//localhost:27017");
//const bodyParser = require("body-parser");
//const app = express();
//onst app = module.exports();
const setupServer = require("./setup-server");
const app = setupServer();

app.get("/news", (req, res) => {
  News.find()
    .then(news => res.json(news))
    .catch(err => res.json(err));
});

app.post("/news", (req, res) => {
  News.create(req.body)
    .then(news => res.json(news))
    .catch(err => res.json(err));
});
