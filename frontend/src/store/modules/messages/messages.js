/* eslint-disable */
import {
  SET_ERROR_MESSAGE,
} from './mutation-types';

const state = {
  error: '',
};

const mutations = {
  [SET_ERROR_MESSAGE](state, message) {
    state.error = message;
  },
};

const actions = {
  setErrorMessage({ commit }, message) {
    commit(SET_ERROR_MESSAGE, message);
  },
};

export default {
  state,
  mutations,
  actions,
};
