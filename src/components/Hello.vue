<template>
  <div class="hello row">
    <div class="tools" style="order:1">

      <div class="row">
        <label>盒子数量:</label>
        <input v-model="boxnumber" type="number">
      </div>

      <div class="row">
        <label>主轴方向:</label>
        <button v-for="item in d_option"
          :class="{ 'active': item.value == ex.direction }"
          @click="ex.direction = item.value">
          {{ item.label }}
        </button>
      </div>

      <div class="row">
        <label>水平对齐:</label>
        <button v-for="item in x_option"
          :class="{ 'active': item.value == ex.x }"
          @click="ex.x = item.value">
          {{ item.label }}
        </button>
      </div>
      <div class="row">
        <label>垂直对齐:</label>
        <button v-for="item in y_option"
          :class="{ 'active': item.value == ex.y }"
          @click="ex.y = item.value">
          {{ item.label }}
        </button>
      </div>

      <div class="row">
        <label>平分空间:</label>
        <button :class="{ 'active': ex.stretch == true }"
          @click="ex.stretch = !ex.stretch">
            stretch
        </button>
      </div>

      <div class="row">
        <label>自动折行:</label>
        <button :class="{ 'active': ex.wrap == true }"
          @click="ex.wrap = !ex.wrap">
            wrap
        </button>
      </div>

      <div class="row" style="margin-top:10px;">
        <input v-model="objclass" class="classtyle" readonly="true">
      </div>
    </div>

    <div class="example flex-1" :class="objclass">
      <div class="box" v-for="item in box">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

      d_option: [
        { value: 'row', label: '横向' },
        { value: 'col', label: '纵向' }
      ],

      x_option: [
        { value: 'left', label: 'left' },
        { value: 'center', label: 'center' },
        { value: 'right', label: 'right' },
        { value: 'around', label: 'around' },
        { value: 'between', label: 'between' },
        { value: 'evenly', label: 'evenly' }
      ],

      y_option: [
        { value: 'top', label: 'top' },
        { value: 'center', label: 'center' },
        { value: 'bottom', label: 'bottom' },
        { value: 'around', label: 'around' },
        { value: 'between', label: 'between' },
        { value: 'evenly', label: 'evenly' }
      ],

      ex: {
        direction: 'row',   // 方向 row | col
        x: 'left',          // x 轴对齐方式
        y: 'top',           // y 轴对齐方式
        stretch: false,     // stretch
        wrap: true          // 换行开关
      },

      boxnumber: 0,
      box: []
    }
  },
  computed: {
    objclass: function () {
      let str = this.ex.direction
      if (this.ex.x) {
        str += '-' + this.ex.x
      }

      if (this.ex.y) {
        str += '-' + this.ex.y
      }

      let stretch = this.ex.stretch ? 'stretch' : ''
      let nowrap = this.ex.wrap ? '' : 'nowrap'
      return [str, stretch, nowrap]
    }
  },
  watch: {
    boxnumber: function (val) {
      this.box = []
      for (var i = 1; i <= val; i++) {
        this.box.push({
          label: i
        })
      }
    }
  },
  mounted () {
    this.boxnumber = 31
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {

  > div {
    margin: 10px;
    border:1px solid green;
  }

  .example {
    .box {
      margin: 2px;
      min-width: 30px;
      min-height: 20px;
      text-align: center;
      background-color: #fcc;
      border: 1px solid #9E9E9E;
    }

    height: 200px;
    overflow: hidden;
  }

  .tools {
    margin-left: 0px;
    padding:10px;
    background-color: #eee;

    .row {
      margin-top: 5px;

      > label {
        width: 80px;
        text-align: center;
      }

      > button {
        width: 60px;
        background-color: #fff;
        border: 1px #ccc solid;
        border-radius: 3px;
        margin: 0px 1px;
      }

      .active {
        background-color: #FF5722;
        color: white;
      }

      .classtyle {
        width: 100%;
        font-weight: bold;
        text-align: center;
        height: 20px;
        line-height: 20px;
        background-color: #eee;
        border: 0px;
      }
    }
  }
}
</style>
