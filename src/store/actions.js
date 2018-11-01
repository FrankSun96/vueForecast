import axios from 'axios'

export default {
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
  },
  initNext5DaysWeather (context) {
    let appId = '377f6d6464ca58edcea50b39e32bd7f6'
    axios.post(`https://api.openweathermap.org/data/2.5/forecast?q=Limerick&appid=${appId}&units=metric&type=like`)
      .then(response => {
        let tempDays = []
        let forecast = response.data.list
        let temp = -1
        forecast.forEach((item, i) => {
          let data = new Date(item.dt_txt).getDay()
          let today = new Date().getDay()
          if (data === temp || ((data === today) && tempDays.length <= 5)) {
          } else {
            temp = data
            tempDays.push({
              temp_min: Math.round(item.main.temp_min),
              temp_max: Math.round(item.main.temp_max),
              weather_index: item.weather[0].id,
              weekday: temp
            })
          }
        })
        context.commit('initNext5DaysWeather', tempDays)
      })
  }
}
