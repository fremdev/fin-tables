<template>
  <div class="advanced-dashboard">
    <h1>Advanced Dashboard</h1>
    <main-controls />
    <error-message />
    <fin-table
      :titles="firstTableTitles"
      :tableData="firstTableValues" />
  </div>
</template>

<script>
import { pick } from 'ramda';
import FinTable from '@/components/finTable/FinTable';
import MainControls from '@/components/MainControls';
import ErrorMessage from '@/components/ErrorMessage';

export default {
  name: 'advanced-dashboard',

  components: {
    FinTable,
    MainControls,
    ErrorMessage,
  },

  props: {
    tablesData: {
      type: Object,
    },
  },

  data() {
    return {
      firstTableTitles: ['Price per acre', 'Number acres', 'Input costs'],
    };
  },

  computed: {
    firstTableValues() {
      return pick(this.firstTableTitles, this.tablesData);
    },
  },
};
</script>
