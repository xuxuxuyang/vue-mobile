<template>
  <div id="tab-bar">
    <tabbaritem link="/home">
      <div slot="icon">
        <img src="~assets/img/tabbar/home.svg"
             alt="">
      </div>
      <div slot="active-icon">
        <img src="~assets/img/tabbar/home_active.svg"
             alt="">
      </div>
      <div slot="text">首页</div>
    </tabbaritem>

    <tabbaritem link="/classify">

      <div slot="icon">
        <img src="~assets/img/tabbar/category.svg"
             alt="">
      </div>
      <div slot="active-icon">
        <img src="~assets/img/tabbar/category_active.svg"
             alt="">
      </div>
      <div slot="text">分类</div>
    </tabbaritem>
    <tabbaritem link="/shopcat">

      <div slot="icon">
        <img src="~assets/img/tabbar/cart.svg"
             alt="">
      </div>
      <div slot="active-icon">
        <img src="~assets/img/tabbar/cart_active.svg"
             alt="">
      </div>
      <div slot="text">购物车</div>
    </tabbaritem>
    <tabbaritem link="/profile">

      <div slot="icon">
        <img src="~assets/img/tabbar/profile.svg"
             alt="">
      </div>
      <div slot="active-icon">
        <img src="~assets/img/tabbar/profile_active.svg"
             alt="">
      </div>
      <div slot="text">我的</div>
    </tabbaritem>
  </div>
</template>

<script>
import tabbaritem from './TabBarItem'
export default {
  name: "TabBar",
  components: {
    tabbaritem
  },
}
</script>

<style scoped>
#tab-bar {
  background-color: #ccc;
  /* 本身的样式 */
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);

  /* 定位相关 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 利用flex进行布局 */
  display: flex;
  text-align: center;
}
</style>


