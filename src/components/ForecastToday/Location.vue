<template>
  <div class="font">
    <span>{{ location }}</span>
  </div>
</template>

<script>
export default {
  name: 'Location',
  computed: {
    location () {
      return this.$store.getters.location
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.font {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-family: Krub, sans-serif;
  font-size: 2.5em;
}
</style>
