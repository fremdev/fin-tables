const express = require('express');
const getRates = require('../rates').getRates;
const tablesData = require('../tablesData');
const api = express.Router();

api.get('/rates', (req, res) => {
  getRates((rates) => {
    res.json(rates)
  })
});

api.get('/data', (req, res) => {
  tablesData.getTablesData((data, err) => {
    if (err) {
      console.log('Unable to get tables data', err);
      res.status(500).send({ error: 'Unable to get tables data' });
      return;
    }
    res.json(data);
  });
});

api.post('/data', (req, res) => {
  console.dir(req.body);
  tablesData.saveTablesData(req.body, (err) => {
    if (err) {
      console.log('Unable to save tables data', err);
      res.status(500).send({ error: 'Unable to save tables data' });
      return;
    }
    res.status(200).end();
  });
});

module.exports = api;
