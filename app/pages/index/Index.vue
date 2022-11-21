<template>
  <div class="main-page">
    <div class="container">
      <div class="wrap">
        <div class="top">
          <div class="left">
            <!-- <trading-vue :data="this.$data"></trading-vue> -->
            <!-- <chart style="height: 100%;" /> -->
            <chart class="chart" />
            <!-- <div id="chart" style="height: 50%"></div> -->
          </div>
          <div class="right">
            <watch-list />
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            ORDER
          </div>
          <div class="right">
            <div class="top">
              <portfolio />
            </div>
            <div class="bottom">
              <order />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'PageIndex',
  data() {
    return {}
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      console.log(123)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  .wrap {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .top {
    height: 50vh;
    display: flex;

    .left {
      flex: 5;
      .chart {
        height: 100%;
      }
    }

    .right {
      flex: 2;
    }
  }

  .bottom {
    flex-grow: .5;
    display: flex;

    .left {
      flex: 2;
      background: rgba(165, 42, 42, 0.27);
    }

    .right {
      flex: 4;
      display: flex;
      flex-direction: column;

      .top {
        flex-grow: .5;
        display: block;
      }

      .bottom {
        flex-grow: .5;
        display: block;
      }
    }
  }
}
</style>
