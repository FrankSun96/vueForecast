<template>
  <el-container>
    <el-main>
      <el-table
        v-loading="loading"
        :data="forecastData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
          width="180">
        </el-table-column>
        <el-table-column
          prop="minTemperature"
          label="Minimum Temperature"
          width="180">
        </el-table-column>
        <el-table-column
          prop="maxTemperature"
          label="Maximum Temperature">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Forecast',
  data () {
    return {
      loading: true,
      forecastData: [
        {
          date: null,
          minTemperature: null,
          maxTemperature: null,
          day: null,
          night: null
        }
      ]
    }
  },
  mounted () {
    this.axios
      .get('http://dataservice.accuweather.com/forecasts/v1/daily/1day/3493380?apikey=vnNtXhMoB3Cq7rLQWtd1A7HL3kcSjQst&details=false')
      .then(response => {
        let forecast = response.data
        this.data = forecast
        this.forecastData[0].date = forecast.DailyForecasts[0]['Date']
        this.forecastData[0].minTemperature = forecast.DailyForecasts[0]['Temperature']['Minimum']['Value'] + ' F'
        this.forecastData[0].maxTemperature = forecast.DailyForecasts[0]['Temperature']['Maximum']['Value'] + ' F'
        // this.day = forecast.DailyForecasts[0]['Temperature']['Day']['IconPhrase']
        // this.night = forecast.DailyForecasts[0]['Temperature']['Night']['IconPhrase']
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>
