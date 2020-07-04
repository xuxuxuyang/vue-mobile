<template>
  <div class="home">
    <!-- 头部 navbar-->
    <mt-header fixed
               title="购物街"
               class="header" />
    <!-- 轮播图  swiper-->
    <mt-swipe :auto="4000"
              class="swiper">
      <mt-swipe-item v-for="(item,index) in Swiperdata"
                     :key="index"
                     class="swiperitem">
        <a :href="item.link">
          <img :src="item.image"
               alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- recomends组件 -->
    <recommends :recommends="recommends" />
    <!-- feature组件 -->
    <feature />
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
</template>

<script>
import { getHomedata } from 'network/home.js'
import { Swipe, SwipeItem } from 'mint-ui';

import recommends from './childComps/Recommends'
import feature from './childComps/Feature'

export default {
  // 获取home页面的数据
  created () {
    // 轮播图数据
    getHomedata().then(res => {
      // 保存轮播图数据
      this.Swiperdata = res.data.banner.list
      //保存recommend数据
      this.recommends = res.data.recommend.list
      console.log(this.recommends);

    })
  },
  data () {
    return {
      Swiperdata: [],
      recommends: []
    };
  },
  components: {
    recommends,
    feature
  }
};
</script>

<style>
.header {
  background-color: pink;
  font-size: 16px;
}
.swiper {
  width: 100%;
  height: 200px;
}
.swiperitem img {
  width: 100%;
  height: 250px;
}
.home {
  height: 100%;
  color: white;
  font-size: 18px;
  font-weight: 400;
  margin-top: 40px;
}
.navbar {
  background-color: pink;
}
img {
  height: 390px;
  width: 0;
}
</style>