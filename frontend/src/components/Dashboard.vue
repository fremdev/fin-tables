<template>
  <div class="dashboard">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '@/components/Nav';

export default {
  name: 'Dashboard',

  components: {
    Navigation,
  },

  data() {
    return {
      rates: null,
      tablesData: {
        Revenue: 5,
        Profit: 25,
        'Gross Income': 20,
      },
    };
  },

  mounted() {
    this.fetchRates();
    this.fetchTablesData();
  },

  methods: {
    ...mapActions({
      fetchTablesData: 'fetchTablesData',
      fetchRates: 'fetchRates',
    }),
  },
};
</script>
