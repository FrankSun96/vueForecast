export default {
  initWeather (state, weather) {
    state.weather.location = weather.location
    state.weather.temp = weather.temp
    state.weather.temp_max = weather.temp_max
    state.weather.temp_min = weather.temp_min
    state.weather.wind = weather.wind
    state.weather.humidity = weather.humidity
    state.weather.pressure = weather.pressure
    state.weather.description = weather.description
  },
  setWeatherImg (state, id) {
    let img = ''
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
    state.weather.weather_image = require(`../assets/weather/${img}.png`)
  },
  setLoading (state, flag) {
    state.loading = flag
  },
  initNext5DaysWeather (state, weather) {
    state.nextdays = weather
  }
}
