<template>
  <tr>
    <th>{{ title }}</th>
    <td v-for="(year, index) in years" :key="year">
      <fin-table-cell
        :value="values[index] && values[index].value"
        :currency="values[index] && values[index].currency"
        :index="index"
        :title="title"
        :inputType="inputType" />
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

  computed: {
    inputType() {
      return this.title === 'Number acres' ? 'int' : 'float';
    },
  },
};
</script>

<style scoped>
tr, th, td {
  border: 1px solid black;
  height: 40px;
}
th {
  min-width: 150px;
  background-color: #505763;
  color: white;
}
td {
  width: 160px;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
</style>
