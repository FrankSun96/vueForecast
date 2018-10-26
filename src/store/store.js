import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    weather: {
      location: '',
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      wind: 0,
      humidity: 0,
      weather_image: 0,
      pressure: 0,
      description: ''
    },
    loading: true
  },
  getters: {
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
    }
  },
  mutations: {
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
    }
  },
  actions: {
    initWeather (context) {
      let appId = '377f6d6464ca58edcea50b39e32bd7f6'
      context.commit('setLoading', true)
      axios
        .post(`https://api.openweathermap.org/data/2.5/weather?q=Limerick&appid=${appId}&units=metric`)
        .then(response => {
          let weather = {}
          let forecast = response.data
          weather.location = forecast.name
          weather.temp = forecast.main.temp
          weather.temp_max = forecast.main.temp_max
          weather.temp_min = forecast.main.temp_min
          weather.wind = forecast.wind.speed
          weather.humidity = forecast.main.humidity
          weather.pressure = forecast.main.pressure
          weather.description = forecast.weather[0].description
          context.commit('initWeather', weather)
          context.commit('setWeatherImg', forecast.weather[0].id)
          context.commit('setLoading', false)
        })
    }
  }
})
