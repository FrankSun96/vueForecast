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

<style scoped>
.font {
  font-family: helvetica, sans-serif;
  font-size: 2.5em;
}
</style>
