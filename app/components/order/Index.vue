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
        { name: 'sym', title: 'Symbol', },
        { name: 'type', title: 'Type', },
        { name: 'price', title: 'Price', },
        { name: 'qty', title: 'Qty.', },
        { name: 'amnt', title: 'Amount', },
        { name: 'stat', title: 'Status', },
        { name: 'time', title: 'Time', },
      ],
      data: [
        { sym: 'AAPL', type: 'Limit BUY', qty: '1000', price: '$139', amnt: '+$4 186,00', stat: 'Filled', time: '10 days ago', },
        { sym: 'AG', type: 'Limit BUY', qty: '300', price: '$19', amnt: '+$3 186,00', stat: 'Filled', time: 'a month ago', },
        { sym: 'Z', type: 'Limit BUY', qty: '200', price: '$12', amnt: '+$2 186,00', stat: 'Filled', time: 'a month ago', },
        { sym: 'MRNA', type: 'Limit BUY', qty: '100', price: '$11', amnt: '+$1 186,00', stat: 'Filled', time: 'a month ago', },
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
