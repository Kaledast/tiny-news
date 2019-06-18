const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(
  '/api',
  proxy({ target: 'https://www.metaweather.com', changeOrigin: true })
);
app.listen(3000);
