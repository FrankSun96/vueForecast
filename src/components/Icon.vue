<template>
    <transition><divclass="animated shake"><img :src="images" class="img"></div></transition>
</template>

<script>
export default {
  name: 'Icon',
  computed: {
    images () {
      let id = this.$store.getters.weather_index
      let img
      if (id >= 200 || id <= 232) {
        img = 'thunderstorm'
      } else if (id >= 300 || id <= 531) {
        img = 'rain'
      } else if (id >= 600 || id <= 622) {
        img = 'snow'
      } else if (id >= 701 || id <= 781) {
        img = 'atmosphere'
      } else if (id === 800) {
        img = 'sunny'
      } else if (id >= 800) {
        img = 'cloudy'
      }
      return require(`../assets/weather/${img}.png`)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import  '../../node_modules/animate.css/animate.css';
  .img {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 8em;
    margin-top:1em;
  }
</style>
