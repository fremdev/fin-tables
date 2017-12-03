<template>
  <div class="dashboard">
    <button @click="saveTablesData">Test save</button>
    <navigation />
    <router-view />
  </div>
</template>

<script>
import http from '@/helpers/http';
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
    this.getRates();
  },

  methods: {
    getRates() {
      http.get('rates')
        .then((res) => {
          this.rates = res.data.currencies.currency;
        })
        .catch((err) => {
          console.log('Unable to get current rates', err);
        });
    },
    saveTablesData() {
      http.post('data', this.tablesData)
        .then(() => {
          console.log('Data was successfully saved');
        })
        .catch((err) => {
          console.log('Unable to save data', err);
        });
    },
  },
};
</script>
