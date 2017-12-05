<template>
  <div class="cell">
    <input type="text" :value="currentValue" @change="handleValueChange" />
    <select :value="currentCurrency" @change="handleCurrencyChange">
      <option value="CLP">CLP</option>
      <option value="CNY">CNY</option>
      <option value="EUR">EUR</option>
      <option value="INR">INR</option>
      <option value="USD">USD</option>
    </select>
  </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'fin-table-cell',
  props: {
    title: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    value: {},
    currency: {},
  },

  data() {
    return {
      currentValue: this.value,
      currentCurrency: this.currency,
    };
  },

  methods: {
    ...mapActions({
      updateCellData: 'updateCellData',
    }),

    handleValueChange(e) {
      const { title, index, currentCurrency } = this;
      const value = Number(e.target.value);
      /* eslint-disable no-self-compare */
      if (value === value) {
        this.currentValue = value;
        this.updateCellData({
          title,
          index,
          data: { value, currency: currentCurrency },
        });
      }
    },

    handleCurrencyChange(e) {
      this.currentCurrency = e.target.value;
      const { title, index, currentValue, currentCurrency } = this;
      this.updateCellData({
        title,
        index,
        data: { value: currentValue, currency: currentCurrency },
      });
    },
  },
};
</script>
