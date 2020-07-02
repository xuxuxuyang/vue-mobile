<template>
  <div class=''>
    <mt-tabbar v-model="selected">
      <mt-tab-item>
        <img slot="icon"
             src="~assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon"
             src="~assets/logo.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon"
             src="~assets/logo.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon"
             src="~assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data () {
    return {
      list: ['我的', '订单', '购物车', '我的'],
      selected: '外卖'
    }
  },
  computed: {},
  methods: {

  },
}
</script>

<style lang="less" scoped>
</style>