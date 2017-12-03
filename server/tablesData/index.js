const jsonfile = require('jsonfile');
const path = require('path');
const dataPath = path.join(__dirname, '../data');

const getTablesData = (callback) => {
  jsonfile.readFile(dataPath + '/tablesData.json', (err, data) => {
    console.log('tablesData', data);
    callback(data, err);
  });
};

const saveTablesData = (data, callback) => {
  jsonfile.writeFile(dataPath + '/tablesData.json', data, (err) => {
    callback(err);
  });
};

module.exports = {
  getTablesData,
  saveTablesData,
};
