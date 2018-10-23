<template>
  <div class="main">
    <Location></Location>
    <Temperature></Temperature>
  </div>
</template>
<script>
import Location from '@/components/Location'
import Temperature from '@/components/Temperature'

export default {
  name: 'forecast',
  components: {
    Location,
    Temperature
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('initWeather')
  }
}
</script>

<style scoped>
  .main {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
  .app--day {
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  }
  .app--night {
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  }
  @media screen and (min-width: 450px) {
    .main {
      width: 330px;
      height: 600px;
      border-radius: 5px;
    }
  }
</style>
