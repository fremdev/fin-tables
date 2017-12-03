<template>
  <select v-model="currency">
  <option value="USD">USD</option>
  <option value="CAD">CAD</option>
  <option value="EUR">EUR</option>
</select>
</template>

<script>
export default {
  name: 'currency',

  data() {
    return {
      currency: 'USD',
    };
  },
};
</script>
