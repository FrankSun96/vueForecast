<template>
  <div class="description">
    {{ description }}
  </div>
</template>

<script>
export default {
  name: 'Description',
  computed: {
    description () {
      return this.$store.getters.description
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.description {
  margin-top: 0.5em;
  font-size: 1.5em;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
