<template>
  <div class="dashboard">
    <navigation />
    <router-view :tablesData="tablesData" />
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

  mounted() {
    this.fetchRates();
    this.fetchTablesData();
  },

  computed: {
    ...mapState({
      rates: state => state.tablesData.rates,
      tablesData: state => state.tablesData.data,
    }),
  },

  methods: {
    ...mapActions({
      fetchTablesData: 'fetchTablesData',
      fetchRates: 'fetchRates',
    }),
  },
};
</script>
