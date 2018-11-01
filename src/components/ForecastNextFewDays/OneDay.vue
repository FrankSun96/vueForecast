<template>
    <div class="main">
      <img class="image" :src="weather_img">
      <div class="desription">
        <div class="weekday">{{ weekday_des }}</div>
        <div class="temp">{{ temp_min }}&#176;C～{{ temp_max }}&#176;C</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'OneDay',
  data () {
    return {
      temp_max: this.weather.temp_max,
      temp_min: this.weather.temp_min,
      weather_index: this.weather.weather_index,
      weekday: this.weather.weekday
    }
  },
  props: {
    weather: {
      type: Object,
      required: true
    }
  },
  computed: {
    weather_img () {
      let img = ''
      let id = this.weather_index
      if (id >= 200 && id <= 232) {
        img = 'thunderstorm'
      } else if (id >= 300 && id <= 531) {
        img = 'rain'
      } else if (id >= 600 && id <= 622) {
        img = 'snow'
      } else if (id >= 701 && id <= 781) {
        img = 'atmosphere'
      } else if (id === 800) {
        img = 'sunny'
      } else if (id >= 800) {
        img = 'cloudy'
      }
      return require(`../../assets/weather/${img}.png`)
    },
    weekday_des () {
      let weekday = ''
      switch (this.weekday) {
        case 0: weekday = 'Sunday'; break
        case 1: weekday = 'Monday'; break
        case 2: weekday = 'Tuesday'; break
        case 3: weekday = 'Wednesday'; break
        case 4: weekday = 'Thursday'; break
        case 5: weekday = 'Friday'; break
        case 6: weekday = 'Saturday'; break
      }
      return weekday
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .main {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.20), 0 10px 15px rgba(0,0,0,0.15);
    padding-top:0.5em;
    .image {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 6em;
    }
    .desription {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .desription {
        font-size: 1.5em;
        font-weight: 400
      }
      .temp {
        font-size: 2em;
        font-weight: 500
      }
    }
  }
</style>
