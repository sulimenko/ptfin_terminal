<template>
  <div>
    <div id="chart" class="canvas"></div>
  </div>
</template>
<script>
    
import klinecharts from 'klinecharts'
import chartDemoData from './chartDemoData'
import options from './themes'
// const Alpaca = require('@alpacahq/alpaca-trade-api')
// const API_KEY = 'PK90WL66BX85OKJY1NAN'
// const API_SECRET = 'ZfTHCFvPdCzDUYySbZl0LAhIikMc36rIJFPeB2NF'
    
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
    
    // const alpaca = new Alpaca({
    //   keyId: API_KEY,
    //   secretKey: API_SECRET,
    //   paper: true,
    // })

    // const socket = alpaca.data_stream_v2
    
    // socket.onConnect(() => {
    //   console.log('Connected')
    //   socket.subscribeForQuotes([ 'AAPL', ])
    //   // socket.subscribeForTrades(['FB'])
    //   socket.subscribeForBars([ 'SPY', ])
    // })
    // socket.onError((err) => {
    //   console.log(err)
    // })
    // socket.onStockTrade((trade) => {
    //   console.log(trade)
    // })
    // socket.onStockQuote((quote) => {
    //   console.log(quote)
    // })
    // socket.onStockBar((bar) => {
    //   console.log(bar)
    // })
    // socket.onStatuses((s) => {
    //   console.log(s)
    // })
    // socket.onStateChange((state) => {
    //   console.log(state)
    // })
    // socket.onDisconnect(() => {
    //   console.log('Disconnected')
    // })

    // socket.connect()

    // const iex = new IEXCloudClient(fetch, { 
    //   sandbox: true,
    //   publishable: 'pk_a6db44bcdad54749b507019c34e5c7e4',
    //   version: 'stable',
    // })

    // iex.symbol('tsla')
    //   .chart('6m', { chartCloseOnly: false, })
    //   .then((res) => console.log(res))

    this.dataset = chartDemoData()
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
