<template>
  <div class="dashboard">
    <navigation />
    <div v-if="isLoading">Fetching data...</div>
    <router-view v-if="!isLoading" :tablesData="tablesData" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Navigation from '@/components/Nav';

export default {
  name: 'Dashboard',

  components: {
    Navigation,
  },

  data() {
    return {
      isRatesLoaded: false,
      isTablesDataLoaded: false,
    };
  },

  mounted() {
    this.fetchRates().then(() => {
      this.isRatesLoaded = true;
    });
    this.fetchTablesData().then(() => {
      this.isTablesDataLoaded = true;
    });
  },

  computed: {
    ...mapState({
      rates: state => state.tablesData.rates,
      tablesData: state => state.tablesData.data,
    }),
    isLoading() {
      return !this.isRatesLoaded || !this.isTablesDataLoaded;
    },
  },

  methods: {
    ...mapActions({
      fetchTablesData: 'fetchTablesData',
      fetchRates: 'fetchRates',
    }),
  },
};
</script>
