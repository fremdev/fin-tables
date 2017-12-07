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
    <span v-if="value">{{ shortValue }} {{ currency }}</span>
    <span v-else="value">{{ value }} {{ currency }}</span>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

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
    }),

    shortValue() {
      return this.value ? this.value.toFixed(2) : this.value;
    },
  },

  methods: {
    ...mapActions({
      updateCellData: 'updateCellData',
    }),

    handleValueChange(e) {
      const { title, index, currency } = this;
      const value = Number(e.target.value);
      /* eslint-disable no-self-compare */
      if (value === value) {
        this.updateCellData({
          title,
          index,
          data: { value, currency },
        });
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
