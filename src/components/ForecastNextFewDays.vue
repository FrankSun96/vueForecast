<template>
  <div class="main">
  </div>
</template>

<script>
export default {
  name: 'ForecastNextFewDays'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .app--day {
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  }
  .app--night {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  }
  @media screen and (min-width: 450px) {
    .main {
      width: 330px;
      height: 600px;
      border-radius: 5px;
    }
  }
</style>
