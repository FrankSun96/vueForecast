<template>
  <div class="main">
    <Location></Location>
    <Icon></Icon>
    <Temperature></Temperature>
    <Description></Description>
    <Others></Others>
  </div>
</template>
<script>
import Location from '@/components/Location'
import Temperature from '@/components/Temperature'
import Others from '@/components/Others'
import Icon from '@/components/Icon'
import Description from '@/components/Description'
export default {
  name: 'Forecast',
  components: {
    Location,
    Icon,
    Temperature,
    Others,
    Description
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

    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
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
