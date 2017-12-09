<template>
  <tr>
    <th>{{ title }}</th>
    <td v-for="(year, index) in years" :key="year">
      <fin-table-cell
        :value="values[index] && values[index].value"
        :currency="values[index] && values[index].currency"
        :index="index"
        :title="title" />
    </td>
  </tr>
</template>

<script>
import FinTableCell from './FinTableCell';

export default {
  name: 'fin-table-row',

  components: {
    FinTableCell,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    startYear: {
      type: Number,
      default: 2012,
    },
    years: {
      type: Number,
      default: 4,
    },
    values: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
tr, th, td {
  border: 1px solid black;
}
th {
  min-width: 150px;
  background-color: #505763;
  color: white;
}
td {
  width: 150px;
}
</style>
