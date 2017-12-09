<template>
  <thead>
    <tr>
      <th>
        <select v-if="editMode" :value="currentCurrency" @change="handleCurrencyChange">
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
import { mapState } from 'vuex';

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

  computed: {
    ...mapState({
      editMode: state => state.settings.editMode,
    }),
  },

  methods: {
    handleCurrencyChange(e) {
      this.currentCurrency = e.target.value;
      this.$emit('baseCurrencyChange', this.currentCurrency);
    },
  },
};
</script>

<style scoped>
tr, th {
  border: 1px solid black;
}

th {
  background-color: #505763;
  color: white;
}
</style>
