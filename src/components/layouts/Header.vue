<template>
  <div class="header">
    <div class="menu container">
      <ul>
        <li>Home</a></li>
        <li>列子</li>
      </ul>
    </div>
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
$header-height: 40px;

.header {
  background-color: #00BCD4;
  height: $header-height;

  .menu {

    font-size: 16px;
    color: #eee;
    // background-color: #00BCD4;
    ul {
      margin: 0px;
      padding: 0px;

      > li {
        line-height: $header-height;
        list-style: none;
        display: inline;
        cursor: pointer;
        & :hover {
          background-color: blue;
        }
      }
    }
  }
}
</style>
