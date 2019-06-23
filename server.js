const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express(),
  DIST_DIR = './dist',
  HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(HTML_FILE));

app.get('/api/cows', (req, res) => {
  db.connection.query('SELECT name, description FROM cows;', function(
    error,
    results
  ) {
    if (error) {
      res.send(error);
    }
    res.send(results);
  });
});

app.post('/api/cows', (req, res) => {
  const description = req.body.description;
  const name = req.body.name;
  console.log(req.body);

  db.connection.query(
    `INSERT INTO cows (name, description) VALUES ("${name}", "${description}");`,
    (error, results) => {
      if (error) {
        res.send(error);
      }
      res.status(201).send();
    }
  );
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
