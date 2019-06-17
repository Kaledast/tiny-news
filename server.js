const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);
