<template>
  <div id="app">
    <div class="info">
      <div class="icon"><font-awesome-icon class="icon" icon="wind" size="lg"/></div>{{ wind }} km/h
    </div>
    <div class="info" >
      <div class="icon"><font-awesome-icon class="icon" icon="tint" size="lg"/></div>{{ humidity }} %
    </div>
    <div class="info">
      <div class="icon"><font-awesome-icon  class="icon" icon="cloud-sun" size="lg"/></div>{{ pressure }} hPa
    </div>
  </div>
</template>

<script>
export default {
  name: 'Others',
  computed: {
    wind () {
      return this.$store.getters.wind
    },
    humidity () {
      return this.$store.getters.humidity
    },
    pressure () {
      return this.$store.getters.pressure
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.info {
  display: inline-flex;
  padding: 0.5em;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 2em;
  .icon {
    margin-right: 0.2em;
  }
}
</style>
