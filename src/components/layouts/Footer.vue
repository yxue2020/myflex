<template>
  <div class="footer">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
  background-color: #ccc;
}
</style>
