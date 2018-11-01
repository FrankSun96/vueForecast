export default {
  location (state) {
    return state.weather.location
  },
  temperature (state) {
    return state.weather.temp
  },
  max_temperature (state) {
    return state.weather.temp_max
  },
  min_temperature (state) {
    return state.weather.temp_min
  },
  wind (state) {
    return state.weather.wind
  },
  humidity (state) {
    return state.weather.humidity
  },
  pressure (state) {
    return state.weather.pressure
  },
  description (state) {
    return state.weather.description
  },
  weather_image (state) {
    return state.weather.weather_image
  },
  next5days (state) {
    return state.nextdays
  }
}
