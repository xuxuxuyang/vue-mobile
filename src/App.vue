<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar />
  </div>
</template>

<script>

import tabbar from 'components/common/tabbar/TabBar'

export default {
  components: {
    tabbar,
  }
};
</script>

<style>
#app {
  height: 100%;
}
@import "assets/css/base.css";
</style>
