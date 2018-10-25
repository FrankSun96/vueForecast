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
      justify-content: center;
      align-items: baseline;
      .large-font {
        @include font;
        font-size: 15em;
        font-weight: 200;
      }
      .temp {
        @include font;
        font-size: 2em;
        font-weight: 300;
      }
    }
    .container-min-max {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
