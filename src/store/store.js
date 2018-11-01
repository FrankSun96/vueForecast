import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

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
    nextdays: [],
    loading: true
  },
  getters,
  mutations,
  actions
})
