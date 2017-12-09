<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn {
  background: #fff;
  border: 1px solid #505763;
  border-radius: 5px;
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.5s all;
}

.btn:hover {
  color: #fff;
  background: #505763;
}

.margin-right {
  margin-right: 1rem;
}
</style>
