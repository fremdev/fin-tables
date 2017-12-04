/* eslint-disable */
import {
  SET_TARGET_CURRENCY,
} from './mutation-types';

const state = {
  targetCurrency: 'USD',
};

const mutations = {
  [SET_TARGET_CURRENCY](state, targetCurrency) {
    state.targetCurrency = targetCurrency;
  },
};

const actions = {
  setTargetCurrency({ commit }, targetCurrency) {
    commit(SET_TARGET_CURRENCY, targetCurrency);
  },
};

export default {
  state,
  mutations,
  actions,
};
