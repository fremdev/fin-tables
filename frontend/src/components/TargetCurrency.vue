<template>
  <div class="target-currency">
    <label for="targetCurrency">Target currency:</label>
    <select :value="targetCurrency" @change="handleCurrencyChange" id="targetCurrency">
      <option value="CLP">CLP</option>
      <option value="CNY">CNY</option>
      <option value="EUR">EUR</option>
      <option value="INR">INR</option>
      <option value="USD">USD</option>
    </select>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'currency',

  computed: {
    ...mapState({
      targetCurrency: state => state.settings.targetCurrency,
    }),
  },

  methods: {
    ...mapActions({
      setTargetCurrency: 'setTargetCurrency',
    }),

    handleCurrencyChange(e) {
      const currency = e.target.value;
      this.setTargetCurrency(currency);
    },
  },
};
</script>
