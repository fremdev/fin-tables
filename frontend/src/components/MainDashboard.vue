<template>
  <div class="main-dashboard">
    <h1>Main Dashboard</h1>
    <fin-table
      :titles="firstTableTitles"
      :tableData="firstTableValues" />
    <fin-table
      :titles="secondTableTitles"
      :tableData="secondTableValues" />
  </div>
</template>

<script>
import { pick } from 'ramda';
import FinTable from '@/components/finTable/FinTable';

export default {
  name: 'main-dashboard',

  components: {
    FinTable,
  },

  props: {
    tablesData: {
      type: Object,
    },
  },

  data() {
    return {
      firstTableTitles: ['Revenue', 'Profit', 'Gross Income'],
      secondTableTitles: ['Assets', 'Liabilities'],
    };
  },

  computed: {
    firstTableValues() {
      return pick(this.firstTableTitles, this.tablesData);
    },
    secondTableValues() {
      return pick(this.secondTableTitles, this.tablesData);
    },
  },
};
</script>
