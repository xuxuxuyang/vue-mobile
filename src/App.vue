<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>

<script>

import tabbar from 'components/common/tabbar/TabBar'
import navbar from 'components/common/navbar/NavBar'

export default {
  methods: {

  },
  data () {
    return {

    };
  },
  methods: {

  },
  components: {
    tabbar,
    navbar
  }
};
</script>

<style>
#app {
  height: 100%;
}
@import "assets/css/base.css";
</style>
