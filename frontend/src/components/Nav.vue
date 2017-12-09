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

<style scoped>
.navigation {
  background-color: #505763;
  padding: 10px 20px;
}
.navigation a {
  text-decoration: none;
  color: #fff;
  margin-right: 1.25rem;
}
.router-link-active {
  font-weight: bold;
}
</style>
