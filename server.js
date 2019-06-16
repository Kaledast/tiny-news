const News = require('./models/News');
const setupServer = require('./setup-server');
const app = setupServer();

app.post('/news', (req, res) => {
  News.create(req.body)
    .then(news => res.json(news))
    .catch(err => res.json(err));
});

app.delete('/news/:id', (req, res) => {
  const { id } = req.params;
  News.findByIdAndDelete(id)
    .then(article => res.status(200).json(article))
    .catch(err => res.status(500).json(err));
});
