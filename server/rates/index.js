const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const dataPath = path.join(__dirname, '../data');

var parser = new xml2js.Parser({explicitArray: false});

const getRates = (callback) => {
  fs.readFile(dataPath + '/rates.xml', (err, data) => {
      parser.parseString(data, (err, result) => {
        if (err) {
          console.log('Error from getRates', error);
        }
        callback(result);
      });
  });
};

module.exports = {
  getRates,
};
