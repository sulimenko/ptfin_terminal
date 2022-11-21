<template>
  <div>
    <div id="chart" class="canvas"></div>
  </div>
</template>
<script>
    
import klinecharts from 'klinecharts'
import chartData from './chartData'
import options from './themes'
    
export default {
  name: 'Index',
  // components: { TradingVue, },
  data() {
    return {
      dataset: [],
      timeframediff: null,
      kLineChart: {},
    }
  },
  mounted() {
    this.kLineChart = klinecharts.init('chart')
    this.dataset = chartData()
    this.timeframediff = Math.abs(
      this.dataset[0].timestamp - this.dataset[1].timestamp
    )
    this.kLineChart.applyNewData(this.dataset)
    this.kLineChart.setStyleOptions(options())
  },
}
    
</script>

<style>

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #191919; */
}

.canvas {
  height: 100%;
}

.k-line-chart-container {
  display: flex;
  flex-direction: column;
  margin: 15px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1f2126;
  width: 620px;
  height: 440px;
  padding: 16px 6px 16px 16px;
}

</style>
