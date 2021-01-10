const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'chris',
  password: '123456',
  database: 'lucy',
});

db.connect();

app.get('/users', (req, res) => {
  const sql =
    'SELECT first_name, last_name, email FROM users ORDER BY last_name';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => console.log('Server started'));
