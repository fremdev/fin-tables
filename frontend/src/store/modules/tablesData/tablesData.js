/* eslint-disable */
import api from '@/helpers/api';
import {
  SET_TABLES_DATA,
  SET_RATES,
} from './mutation-types';

const state = {
  data: {},
  rates: {},
};

const mutations = {
  [SET_TABLES_DATA](state, data) {
    state.data = data;
  },
  [SET_RATES](state, rates) {
    state.rates = rates;
  },
};

const actions = {
  fetchTablesData({ commit }, data) {
    api.getTablesData()
      .then((data) => {
        commit(SET_TABLES_DATA, data);
      })
      .catch((err) => {
        console.log('Error from fetchTablesData', err);
      })
  },

  updateTablesData({ commit }, data) {
    commit(SET_TABLES_DATA, data);
    api.saveTablesData()
      .catch((err) => {
        console.log('Error from updateTablesData', err);
      });
  },

  fetchRates({ commit }, rates) {
    api.getRates()
      .then((rates) => {
        commit(SET_RATES, rates);
      })
      .catch((err) => {
        console.log('Error from fetchRates', err);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
