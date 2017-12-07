/* eslint-disable */
import api from '@/helpers/api';
import convert from '@/helpers/convert';
import {
  SET_TABLES_DATA,
  UPDATE_CELL_DATA,
  SET_RATES,
  UPDATE_ROWS_CURRENCY,
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
  [UPDATE_CELL_DATA](state, data) {
    const row = [...state.data[data.title]];
    row[data.index] = { ...data.data };
    state.data[data.title] = row;
  },
  [UPDATE_ROWS_CURRENCY](state, data) {
    data.rows.forEach(row => {
      state.data[row] = state.data[row].map(cell => {
        if (cell.value) {
          const convertedValue = convert.convertTo(cell, state.rates, data.currency);
          return { value: convertedValue, currency: data.currency };
        }
        return { ...cell, currency: data.currency };
      })
    });
  }
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

  updateCellData({ commit }, data) {
    commit(UPDATE_CELL_DATA, data);
  },

  updateRowsCurrency({ commit }, data) {
    commit(UPDATE_ROWS_CURRENCY, data);
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
