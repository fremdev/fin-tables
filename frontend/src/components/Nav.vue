<template>
  <div class="navigation">
    <router-link to="/dashboard/main">Main</router-link>
    <router-link to="/dashboard/advanced">Advanced</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation',
};
</script>

<style>
.router-link-active {
  font-weight: bold;
}
</style>
