<template>
  <div class="main-dashboard">
    <h1>Main Dashboard</h1>
    <fin-table :titles="firstTableTitles" />
    <fin-table :titles="secondTableTitles" />
  </div>
</template>

<script>
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
};
</script>
