<template>
  <tr>
    <th>{{ title }}</th>
    <td v-for="(year, index) in years" :key="year">{{ values[index] }}</td>
  </tr>
</template>

<script>
export default {
  name: 'fin-table-row',
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
