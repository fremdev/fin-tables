/* eslint-disable */
import {
  SET_TARGET_CURRENCY,
  SET_EDIT_MODE,
} from './mutation-types';

const state = {
  targetCurrency: 'USD',
  editMode: false,
};

const mutations = {
  [SET_TARGET_CURRENCY](state, targetCurrency) {
    state.targetCurrency = targetCurrency;
  },
  [SET_EDIT_MODE](state, isEnabled) {
    state.editMode = isEnabled;
  },
};

const actions = {
  setTargetCurrency({ commit }, targetCurrency) {
    commit(SET_TARGET_CURRENCY, targetCurrency);
  },
  setEditMode({ commit }, isEnabled) {
    commit(SET_EDIT_MODE, isEnabled);
  },
};

export default {
  state,
  mutations,
  actions,
};
