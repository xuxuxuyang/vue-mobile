<template>
  <div class="home">
    <navbar class="navbar">
      <div slot="center">首页</div>
    </navbar>

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

  </div>

</template>

<script>
import navbar from 'components/common/navbar/NavBar'

import { getSwiperdata } from 'network/home.js'
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  created () {
    getSwiperdata().then(res => {
      this.Swiperdata = res.data.banner.list
      console.log(this.Swiperdata);
    })
  },
  data () {
    return {
      Swiperdata: []
    };
  },
  components: {
    navbar,
  }
};
</script>

<style>
.swiper {
  width: 100%;
  height: 250px;
}
.swiperitem img {
  width: 100%;
  height: 250px;
}
.home {
  height: 100%;
}
.navbar {
  background-color: pink;
}
img {
  height: 390px;
  width: 0;
}
</style>