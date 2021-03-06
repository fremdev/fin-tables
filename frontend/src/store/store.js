import Vue from 'vue';
import Vuex from 'vuex';

import settings from './modules/settings/settings';
import messages from './modules/messages/messages';
import tablesData from './modules/tablesData/tablesData';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  modules: {
    settings,
    messages,
    tablesData,
  },
});
