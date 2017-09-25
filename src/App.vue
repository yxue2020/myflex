<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view class="container"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  border:1px solid green;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
