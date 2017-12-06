<template>
  <table>
    <fin-table-header @baseCurrencyChange="changeBaseCurrency" :currency="baseCurrency" />
    <fin-table-row v-for="(values, title) in tableData"
      :key="title"
      :title="title"
      :values="values" />
  </table>
</template>

<script>
import { mapActions } from 'vuex';
import FinTableHeader from './FinTableHeader';
import FinTableRow from './FinTableRow';

export default {
  name: 'fin-table',

  components: {
    FinTableHeader,
    FinTableRow,
  },

  props: {
    tableData: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      baseCurrency: 'USD',
    };
  },

  methods: {
    ...mapActions({
      updateRowsCurrency: 'updateRowsCurrency',
    }),

    changeBaseCurrency(currency) {
      this.baseCurrency = currency;
      const rows = Object.keys(this.tableData);
      this.updateRowsCurrency({ rows, currency });
    },
  },
};
</script>
