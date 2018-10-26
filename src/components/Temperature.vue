<template>
    <div class="container">
      <div class="container-temp">
        <div class="large-font">{{ temperature }}</div>
        <div class="temp">&#176;C</div>
      </div>
      <div class="container-min-max">
        <span>{{ max_temperature }}&#176;C～{{ min_temperature }}&#176;C</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Temperature',
  computed: {
    temperature () {
      return this.$store.getters.temperature
    },
    min_temperature () {
      return this.$store.getters.min_temperature
    },
    max_temperature () {
      return this.$store.getters.max_temperature
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @mixin font {
    font-family: Krub, sans-serif;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    .container-temp{
      display: inline-flex;
      flex-direction: row;
      align-items: baseline;
      .large-font {
        position: relative;
        top: -0.2em;
        right: -0.05em;
        @include font;
        font-size: 15em;
        font-weight: 200;
      }
      .temp {
        position: relative;
        top: -6em;
        right:-0.5em;
        @include font;
        font-size: 2em;
        font-weight: 400;
      }
    }
    .container-min-max {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
  @media screen and (max-width: 410px) {
    .large-font {
      position: relative;
      top: -0.2em;
      right:-0.05em;
      @include font;
      font-size: 18em;
      font-weight: 200;
    }
  }
</style>
