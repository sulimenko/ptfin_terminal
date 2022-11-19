<template>
  <div class="watch-list">
    <n-table class="red" :data="data" :columns="column">
      <template #fir="{item}">
        <div class="img">
          <img :src="item.img">
        </div>
        {{ item.fir }}
      </template>
    </n-table>
  </div>
</template>

<script>
import img from '../../assets/temporary/img.svg'
import sber from '../../assets/temporary/sber.svg'
import luk from '../../assets/temporary/luk.svg'

export default {
  name: 'Index',
  data() {
    return {
      column: [
        { name: 'fir', title: 'Инструмент', },
        { name: 'sec', title: 'Посл.цен', },
        { name: 'third', title: 'Изм.', },
        { name: 'fourth', title: 'Изм.в', },
        // { name: 'l5', title: 'T5', },
        // { name: 'l6', title: 'T6', },
        // { name: '7', title: 'T7', },
        // { name: 'l8', title: 'T8', },
        // { name: 'l9', title: 'T9', },
        // { name: 'l10', title: 'T10', },
      ],
      data: [
        { img: img, fir: 'FB', sec: '113.02', third: '1.15', fourth: '1.03%', },
        { img: sber, fir: 'BILL', sec: '125.38', third: '5.54', fourth: '4.36%', },
        { img: luk, fir: 'SNOW', sec: '159.41', third: '14.03', fourth: '9.65%', },
        { img: img, fir: 'BNTX', sec: '154.51', third: '-2.41', fourth: '7.12%', },
        { img: luk, fir: 'MRNA', sec: '171.20', third: '2.64', fourth: '2.09%', },
        { img: sber, fir: 'QCOM', sec: '121.43', third: '0.75', fourth: '2.22%', },
        { img: img, fir: 'TWLO', sec: '55.27', third: '4.56', fourth: '1.05%', },
        { img: luk, fir: 'BIDU', sec: '89.46', third: '3.35', fourth: '33%', },
        { img: sber, fir: 'ETSY', sec: '115.64', third: '5.43', fourth: '20.01%', },
        { img: img, fir: 'COUP', sec: '55.22', third: '2.56', fourth: '3%', },
        { img: luk, fir: 'DOCU', sec: '53.00', third: '7.50', fourth: '3.33%', },
        { img: sber, fir: 'NTES', sec: '64.76', third: '2.49', fourth: '5.02%', },
        { img: img, fir: 'AVLR', sec: '', third: '', fourth: '', },
        { img: luk, fir: 'MRK', sec: '97.96', third: '3.89', fourth: '11.04%', },
      ],
    }
  },
}
</script>

<style scoped  lang="scss">

.watch-list{
  height: 100%;
  overflow: auto;
}

.img {
  margin: 0 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  transform: translate(0px, 5px);

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
