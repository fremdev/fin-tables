<template>
  <thead>
    <tr>
      <th>Currency</th>
      <th v-for="year in years" :key="year">{{ startYear + year }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'fin-table-header',
  props: {
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
