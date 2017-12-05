<template>
  <thead>
    <tr>
      <th>
        <select :value="currentCurrency" @change="handleCurrencyChange">
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
      </th>
      <th v-for="year in years" :key="year">{{ startYear + year }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'fin-table-header',
  props: {
    startYear: {
      type: Number,
      default: 2012,
    },
    years: {
      type: Number,
      default: 4,
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },

  data() {
    return {
      currentCurrency: this.currency,
    };
  },

  methods: {
    handleCurrencyChange() {
      console.log('handleCurrencyChange');
    },
  },
};
</script>
