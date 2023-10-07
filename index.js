const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World new demo Mikes');
});

module.exports = app;
