<template>
  <tr>
    <th>{{ title }}</th>
    <td v-for="year in years" :key="year">{{ startYear + year }}</td>
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
  },
};
</script>
