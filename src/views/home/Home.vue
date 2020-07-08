<template>
  <div class="home">
    <!-- 头部mint ui的 navbar组件-->
    <mt-header fixed
               title="购物街"
               class="header" />
    <!-- 吸顶效果的复用组件 -->
    <mt-navbar v-model="selected"
               ref="choosenavbar"
               class="fixed"
               v-show="isshow">
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
    <!-- 轮播图mint ui的  swiper组件-->
    <mt-swipe :auto="4000"
              class="swiper">
      <mt-swipe-item v-for="(item,index) in Swiperdata"
                     :key="index"
                     class="swiperitem">
        <a :href="item.link">
          <img :src="item.image"
               alt=""
               @load="imagesload">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- recomends组件 -->
    <recommends :recommends="recommends" />
    <!-- feature组件 -->
    <feature />
    <!-- choosenavbar组件 mint ui的组件 -->
    <mt-navbar v-model="selected"
               ref="choosenavbar">
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
    <!-- mint ui的tab-container组件配合choosenavbar组件使用 -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- goodslist组件 -->
        <goodslist :goods="goods['pop'].list"
                   v-infinite-scroll="loadMore"
                   infinite-scroll-disabled="loading"
                   infinite-scroll-distance="10" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- goodslist组件 -->
        <goodslist :goods="goods['new'].list" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- goodslist组件 -->
        <goodslist :goods="goods['sell'].list" />
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 点击回到顶部的backtop组件 -->
    <backtop @click.native="backtop"
             ref="backtop"
             v-show="backtopisshow">
    </backtop>
  </div>
</template>

<script>
//获取首页数据的封装函数
import { getHomedata, getHomegoods } from 'network/home.js'
//抽离解耦的自创组件
import recommends from './childComps/Recommends'
import feature from './childComps/Feature'
import goodslist from './childComps/Goodslist'
import backtop from './childComps/Backtop'
//better-scroll的封装引入
import scroll from './childComps/Scroll'

export default {
  name: "Home",
  methods: {
    //监听页面滚动的两个方法
    listenerFunction (e) {
      document.addEventListener('scroll', this.handleScroll, true);
    },
    handleScroll () {
      if (window.pageYOffset < 500) {
        this.backtopisshow = false
      } else {
        this.backtopisshow = true
      }

      if (window.pageYOffset < 636) {
        this.isshow = false
      } else {
        this.isshow = true
      }
    },
    //封装的根据类型获取goodslist商品数据方法（可重复调用获取下一页的数据）
    getgoodsdata (type) {
      const page = this.goods[type].page + 1
      getHomegoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    },
    //mint ui提供的方法下拉加载更多 -->根据当前选中的类型加载对应数据
    loadMore () {
      if (this.selected == 1) {
        this.getgoodsdata('pop')
      } else if (this.selected == 2) {
        this.getgoodsdata('new')
      } else {
        this.getgoodsdata('sell')
      }
    },
    //点击backtop返回顶部的方法
    backtop () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 0) {
        window.scrollTo(0, 0)
      }
    },
    //监听图片加载完成的方法
    imagesload () {
      if (!this.isload) {
        this.isload = true
        this.offsetTop = this.$refs.choosenavbar.$el.offsetTop
      }
    }
  },
  created () {
    //监听页面滚动的函数
    this.listenerFunction();
    // 获取home页面数据
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
  //页面销毁前一直保持监听滚动事件
  beforeDestroy () {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  data () {
    return {
      isshow: false,
      backtopisshow: false,
      isload: false,
      offsetTop: '',
      Swiperdata: [],
      recommends: [],
      //默认选中
      selected: '1',
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
    };
  },
  components: {
    recommends,
    feature,
    goodslist,
    backtop,
    scroll
  }
};
</script>

<style>
.header {
  position: fixed;
  z-index: -1;
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
.fixed {
  position: fixed;
  margin-top: 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>