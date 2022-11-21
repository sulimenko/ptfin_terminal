<template>
  <div class="order-form">
    <div class="title">
      <input v-model="test" type="checkbox" @click="check">
      <div class="buy" :class="test ? 'active' : ''">Buy</div>
      <div class="sell" :class="test ? '' : 'active'">Sell</div>
    </div>


    <n-form>
      <n-items>
        <div class="col">
          <n-input v-bind="$form.input('symbol')" title="Symbol" />
          <n-input v-bind="$form.input('mprice')" title="Market Price" />
        </div>
        <n-select :data="options" :value.sync="options.value" title="Order Type" />
        <div class="col">
          <n-input v-bind="$form.input('quantity')" title="Quantity" />
          <n-input v-bind="$form.input('ecost')" title="Estimated Cost" />
        </div>
        <div class="col">
          <n-input v-bind="$form.input('lprice')" title="Limit Price" />
          <n-input v-bind="$form.input('sprice')" title="Stop Price" />
        </div>
        <n-select :data="optionsTime" :value.sync="optionsTime.value" title="Time in Force" />
        <n-button wide>Review Order</n-button>
      </n-items>
    </n-form>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      test: false,
      options: [
        { value: 'market', title: 'Market', },
        { value: 'limit', title: 'Limit', },
        { value: 'stoplimit', title: 'Stop Limit', },
        { value: 'trailingstop', title: 'Trailing Stop', },
      ],
      optionsTime: [
        { value: 'GTC', title: 'GTC - Good till Canceled', },
        { value: 'DAY', title: 'DAY', },
        { value: 'FOK', title: 'FOK - Fill or Kill', },
        { value: 'IOC', title: 'IOC - Immediate or Cancel', },
        { value: 'OPG', title: 'OPG - At the Open', },
        { value: 'CLS', title: 'CLS - At the Close', },
      ],
    }
  },
  mounted() {
    this.$form.init({
      symbol: '',
      mprice: '',
      quantity: '',
      ecost: '',
    })
  },
  created() {
    this.check()
  },
  methods: {
    check() {
      // const buy = document.querySelector('.buy')
      // const sell = document.querySelector('.sell')
      this.test = !this.test
      console.log(this.test)
      if (this.test) {
        console.log(1)
        // sell.classList.add('active')
        // buy.classList.remove('active')
      } else {
        console.log(3)
        // buy.classList.add('active')
        // sell.classList.remove('active')
      }
      this.$form.reset()
    },
  },
}
</script>

<style scoped lang="scss">
.order-form {
  .title {
    display: flex;
    justify-content: space-between;
    position: relative;

    input {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      opacity: 0;
    }
  }

  .buy{
    text-align: center;
    flex-grow: .5;

    &.active{
      color: green;
      background: rgba(0, 128, 0, 0.34);
    }
  }

  .sell{
    text-align: center;
    flex-grow: .5;

    &.active{
      color: red;
      background: rgba(255, 0, 0, 0.2);
    }
  }

  .col {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &::v-deep {
      .n-input {
        &:first-child {
          padding-right: 6px;
        }

        &:last-child {
          padding-left: 6px;
        }
      }
    }
  }
}
</style>
