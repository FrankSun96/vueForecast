<template>
    <div><img :src="image" class="img"></div>
</template>

<script>
export default {
  name: 'Icon',
  computed: {
    image () {
      return this.$store.getters.weather_image
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .img {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 8em;
    margin-top:0.5em;
  }
</style>
