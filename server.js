const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');
const Cow = require('./src/models/Cow.js');

const app = express(),
  DIST_DIR = './dist',
  HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(HTML_FILE));

app.get('/api/cows', (req, res) => {
  Cow.getAllCows((error, results) => {
    if (error) {
      res.status(500).send();
    } else {
      res.send(results);
    }
  });
});

app.post('/api/cows', (req, res) => {
  const { name, description } = req.body;

  Cow.addCow(name, description, err => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});

app.listen(3000, () => console.log(`Cow app listening on port 3000!`));
