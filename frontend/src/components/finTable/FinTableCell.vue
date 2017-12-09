<template>
  <div v-if="editMode" class="cell">
    <input type="text" :value="value" @change="handleValueChange" />
    <select :value="currency" @change="handleCurrencyChange">
      <option value="CLP">CLP</option>
      <option value="CNY">CNY</option>
      <option value="EUR">EUR</option>
      <option value="INR">INR</option>
      <option value="USD">USD</option>
    </select>
  </div>
  <div v-else class="cell">
    <span v-if="value">{{ shortValue }} {{ currency }} <span class="substring">{{ targetCurrencyValue }}</span></span>
    <span v-else="value">{{ value }} {{ currency }}</span>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import convert from '@/helpers/convert';

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

  computed: {
    ...mapState({
      editMode: state => state.settings.editMode,
      targetCurrency: state => state.settings.targetCurrency,
      rates: state => state.tablesData.rates,
    }),

    shortValue() {
      return this.value ? this.value.toFixed(2) : this.value;
    },

    targetCurrencyValue() {
      if (this.currency !== this.targetCurrency) {
        const { currency, value, targetCurrency, rates } = this;
        return convert.convertTo({ currency, value }, rates, targetCurrency).toFixed(2);
      }
      return '';
    },
  },

  methods: {
    ...mapActions({
      updateCellData: 'updateCellData',
      setErrorMessage: 'setErrorMessage',
    }),

    handleValueChange(e) {
      const { title, index, currency } = this;
      const value = Number(e.target.value);
      this.setErrorMessage('');

      /* eslint-disable no-self-compare */
      if (value === value) {
        if (this.inputType === 'int' && !Number.isInteger(value)) {
          this.setErrorMessage('Number acres shoud be an integer');
          return;
        }
        this.updateCellData({
          title,
          index,
          data: { value, currency },
        });
      } else {
        this.setErrorMessage('All values should be numbers');
      }
    },

    handleCurrencyChange(e) {
      const currency = e.target.value;
      const { title, index, value } = this;
      this.updateCellData({
        title,
        index,
        data: { value, currency },
      });
    },
  },
};
</script>

<style scoped>
.cell {
  display: flex;
}

.cell input {
  width: 100px;
}

.substring {
  font-size: 0.75rem;
}
</style>
