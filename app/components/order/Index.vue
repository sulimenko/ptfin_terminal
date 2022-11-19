<template>
  <div class="orders">
    <div class="title">Orders</div>
    <n-table :data="data" :columns="column"></n-table>
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
        { name: 'fourth', title: 'Average Cost', },
        { name: 'fifth', title: 'Amount', },
        { name: 'sixth', title: 'Status', },
        { name: 'seventh', title: 'Time', },
      ],
      data: [
        { fir: 'AAPL', sec: 'Limit BUY @ $139', third: '1000', fourth: '$188 132,00', fifth: '+$4 186,00', sixth: 'Filled', seventh: '10 days ago', },
        { fir: 'AG', sec: 'Limit BUY @ $13', third: '300', fourth: '$1 132,00', fifth: '+$3 186,00', sixth: 'Filled', seventh: 'a month ago', },
        { fir: 'Z', sec: 'Limit BUY @ $12', third: '200', fourth: '$11 132,00', fifth: '+$2 186,00', sixth: 'Filled', seventh: 'a month ago', },
        { fir: 'MRNA', sec: 'Limit BUY @ $11', third: '100', fourth: '$18 132,00', fifth: '+$1 186,00', sixth: 'Filled', seventh: 'a month ago', },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.orders {
  .title {
    font-weight: 600;
    font-size: 20px;
    margin: 0 0 20px;
  }
}
</style>
