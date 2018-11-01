<template>
  <div id="app">
    <!-- Swiper -->
    <div class="app" :class="period">
      <div class="swiper-container shadow main">
        <div class="swiper-wrapper">
          <div class="forecast-today swiper-slide">
            <ForecastToday :class="period"></ForecastToday>
          </div>
          <div class="forecast-today swiper-slide">
            <ForecastNextDays :class="period"></ForecastNextDays>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ForecastToday from '@/components/ForecastToday/ForecastToday'
import ForecastNextDays from '@/components/ForecastNextFewDays/ForecastNextFewDays'
import Swiper from 'swiper/dist/js/swiper.min'
export default {
  name: 'App',
  components: {
    ForecastToday,
    ForecastNextDays
  },
  mounted () {
    // eslint-disable-next-line
    let mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
      }
    })
  },
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    period () {
      let hour = this.date.getHours()
      return (hour > 5 && hour < 18) ? 'app--day' : 'app--night'
    }
  }
}
</script>

<style >
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    touch-action: none;
  }

  body {
    font-family: Krub, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color .2s ease-in;
  }

  /** App **/
  .app {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .shadow {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.25);
  }
  .app--day {
    background-color: #fad0c4;
  }
  .app--night {
    background-color: #6a85b6;
  }
  .app--day a:hover {
    color: rgba(46, 146, 167, 0.9);
  }
  .app--night a:hover {
    color: rgba(0, 0, 0, 0.5);
  }
  .main {
      width: 100%;
      height: 100%;
  }
  @media screen and (min-width: 450px) {
    .main {
      width: 330px;
      height: 600px;
      border-radius: 5px;
    }
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: aliceblue;
  }
</style>
