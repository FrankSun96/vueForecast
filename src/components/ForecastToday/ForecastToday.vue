<template>
  <div class="main">
    <Location></Location>
    <div v-if="$store.state.loading" class="lds-ring"><div></div><div></div><div></div><div></div></div>
    <Icon></Icon>
    <Temperature></Temperature>
    <Description></Description>
    <Others></Others>
  </div>
</template>
<script>
import Location from '@/components/ForecastToday/Location'
import Temperature from '@/components/ForecastToday/Temperature'
import Others from '@/components/ForecastToday/Others'
import Icon from '@/components/ForecastToday/Icon'
import Description from '@/components/ForecastToday/Description'
export default {
  name: 'Forecast',
  components: {
    Location,
    Icon,
    Temperature,
    Others,
    Description
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
  }
  .app--day {
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  }
  .app--night {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  }
  //spinner
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 9em;
    height: 9em;
    margin-top:1em;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 6em;
    height: 6em;
    margin: 1em;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 450px) {
    .main {
      width: 330px;
      height: 600px;
      border-radius: 5px;
    }
  }
</style>
