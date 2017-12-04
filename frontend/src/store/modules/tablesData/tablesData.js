/* eslint-disable */
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
    commit(SET_TABLES_DATA, data);
  },
  updateTablesData({ commit }, data) {
    commit(SET_TABLES_DATA, data);
  },
  fetchRates({ commit }, rates) {
    commit(SET_RATES, rates);
  },
};

export default {
  state,
  mutations,
  actions,
};
