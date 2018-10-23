<template>
    <div>
      <div class="large-font">
        {{ temperature }}&#176;C
      </div>
      <div class="small-font">
        <span>{{ max_temperature }}&#176;C {{ min_temperature }}&#176;C</span>
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

<style scoped>
.large-font {
  font-family: helvetica, sans-serif;
  font-size: 8em;
  font-weight: 500;
}
</style>
