<template>
  <div class="portfolio">
    <div class="title">Portfolio</div>
    <n-table :data="data" :columns="column">
    </n-table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      column: [
        { name: 'fir', title: 'Symbol', },
        { name: 'sec', title: 'Type', },
        { name: 'third', title: 'Qty.', },
        { name: 'fourth', title: 'Market Value', },
        { name: 'fifth', title: 'Profit Loss', },
      ],
      data: [
        { fir: 'MRNA', sec: '$181,32', third: '100', fourth: '$18 132,00', fifth: '+$1 186,00', },
        { fir: 'Z', sec: '$11,32', third: '200', fourth: '$11 132,00', fifth: '+$2 186,00', },
        { fir: 'AG', sec: '$1', third: '300', fourth: '$1 132,00', fifth: '+$3 186,00', },
        { fir: 'AAPL', sec: '$18,32', third: '1000', fourth: '$188 132,00', fifth: '+$4 186,00', },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.portfolio {
  .title {
    font-weight: 600;
    font-size: 20px;
    margin: 0 0 20px;
  }
}
</style>
