<template>
  <table>
    <fin-table-header />
    <fin-table-row v-for="title in titles" :key="title" :title="title" />
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
    titles: {
      type: Array,
      required: true,
    },
  },
};
</script>
