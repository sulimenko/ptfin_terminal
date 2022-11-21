<template>
  <div class="main-page">
    <div class="container">
      <div class="wrap">
        <div class="top">
          <div class="left">
            CHART
          </div>
          <div class="right">
            <watch-list />
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <order-form />
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
