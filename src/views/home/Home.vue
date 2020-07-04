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
    <!-- choosenavabar组件 -->
    <mt-navbar v-model="selected"
               class="choosenavabar">
      <mt-tab-item id="1">
        <span>流行</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span>新款</span>
      </mt-tab-item>
      <mt-tab-item id="3">
        <span>精选</span>
      </mt-tab-item>
    </mt-navbar>
    <!-- goodslist组件 -->
    <goodslist :goods="goods['pop'].list" />
  </div>
</template>

<script>
import { getHomedata, getHomegoods } from 'network/home.js'
import { Swipe, SwipeItem } from 'mint-ui';

import recommends from './childComps/Recommends'
import feature from './childComps/Feature'
import goodslist from './childComps/Goodslist'



export default {
  methods: {
    getgoodsdata (type) {
      const page = this.goods[type].page + 1
      getHomegoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        console.log(this.goods[type].list);
        this.goods[type].page += 1
      })
    }
  },
  // 获取home页面的数据
  created () {
    // 获取首页数据
    getHomedata().then(res => {
      // 保存轮播图数据
      this.Swiperdata = res.data.banner.list
      //保存recommend数据
      this.recommends = res.data.recommend.list
    })
    //获取首页商品数据
    this.getgoodsdata('pop')
    this.getgoodsdata('new')
    this.getgoodsdata('sell')
  },
  data () {
    return {
      Swiperdata: [],
      recommends: [],
      //默认选中
      selected: '1',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      }
    };
  },
  components: {
    recommends,
    feature,
    goodslist
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
  font-size: 18px;
  font-weight: 400;
  margin-top: 40px;
}
.navbar {
  background-color: pink;
}
img {
  height: 390px;
  width: 100px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid pink;
  color: pink;
}
.mint-tab-item-label {
  font-size: 15px;
  font-weight: 530;
}
</style>