import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state: {
    location: '',
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    wind: 0,
    humidity: 0,
    weather_index: 0,
    pressure: 0
  },
  getters: {
    location (state) {
      return state.location
    },
    temperature (state) {
      return state.temp
    },
    max_temperature(state) {
      return state.temp_max
    },
    min_temperature(state) {
      return state.temp_min
    }
  },
  mutations: {
    initWeather (state, weather) {
      state.location = weather.location
      state.temp = weather.temp
      state.temp_max = weather.temp_max
      state.temp_min = weather.temp_min
      state.wind = weather.wind
      state.humidity = weather.humidity
      state.pressure = weather.pressure
      state.weather_index = weather.weather_index
      console.log('done')
    }
  },
  actions: {
    initWeather (context) {
      let appId = '377f6d6464ca58edcea50b39e32bd7f6'
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
          weather.weather_index = forecast.weather[0].id
          weather.pressure = forecast.main.pressure
          context.commit('initWeather', weather)
        })
    }
  }
})
