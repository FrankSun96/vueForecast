<template>
  <div id="app">
    <div class="app" :class="period">
      <Forecast :class="period"></Forecast>
    </div>
  </div>
</template>

<script>
import Forecast from '@/components/Forecast'
export default {
  name: 'App',
  components: {
    Forecast
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

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(255, 255, 255, 0.9);
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
    justify-content: center;
    align-items: center;
  }

  .app--day {
    background-color: #fad0c4;
  }

  .app--night {
    background-color: #09203f;
  }

  .app--day a:hover {
    color: rgba(46, 146, 167, 0.9);
  }

  .app--night a:hover {
    color: rgba(0, 0, 0, 0.5);
  }
</style>
