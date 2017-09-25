<template>
  <div class="header">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  background-color: #ccc;
}
</style>
