<template>
  <div class="home">
    <navbar class="navbar">
      <div slot="center">首页</div>
    </navbar>

    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
import navbar from 'components/common/navbar/NavBar'
import { Swipe, SwipeItem } from 'mint-ui';

import request from 'network/home/request'
export default {
  methods: {
  },
  created () {

  },
  data () {
    return {
      Swiperdata: ''
    };
  },
  components: {
    navbar,
  }
};
</script>

<style>
.home {
  height: 100%;
}
.navbar {
  background-color: pink;
}
</style>