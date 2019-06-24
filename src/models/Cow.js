const db = require('../../db.js');

class Cow {
  constructor() {}

  getAllCows(callback) {
    db.connection.query(
      'SELECT name, description FROM cows;',
      (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback(null, results);
        }
      }
    );
  }

  addCow(name, description, callback) {
    db.connection.query(
      `INSERT INTO cows (name, description) VALUES ("${name}", "${description}");`,
      (error, results) => {
        if (error) {
          callback(error);
        } else {
          callback();
        }
      }
    );
  }
}

module.exports = new Cow();
