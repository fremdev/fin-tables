<template>
  <table>
    <fin-table-header @onBaseCurrencyChange="changeBaseCurrency" :currency="baseCurrency" />
    <fin-table-row v-for="(values, title) in tableData"
      :key="title"
      :title="title"
      :values="values" />
  </table>
</template>

<script>
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
    changeBaseCurrency(currency) {
      this.baseCurrency = currency;
    },
  },
};
</script>
