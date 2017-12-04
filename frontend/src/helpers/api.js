import http from './http';

export default {
  getRates() {
    return http.get('rates')
      .then(res => res.data.currencies.currency);
  },
  getTablesData() {
    return http.get('data')
      .then(res => res.data);
  },
  saveTablesData(data) {
    return http.post('data', data);
  },
};
