<template>
  <div class=''>
    <!-- 这里拿到数据做一个展示 就可以了-->
    {{this.$store.state.goodslist}}
    <button>全选按钮功能测试</button>
    <!-- 传过来的数据用v-for展示 item，这里简单模拟 -->
    <button @click="btnclick">商品勾选按钮功能测试</button>
    <button>商品勾选按钮功能测试</button>
    <button>商品勾选按钮功能测试</button>
    <button>商品勾选按钮功能测试</button>
    <button>商品勾选按钮功能测试</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      goodsitem: { choose: true }
    }
  },
  computed: {},
  methods: {
    btnclick () {
      // 这里的goodsitem用来模拟需要展示的goodsitem数据
      // 点击切换item数据对象里的choose属性值 用这个属性值区渲染对应的界面是否选中
      this.goodsitem.choose = !this.goodsitem.choose
      console.log(this.goodsitem.choose);
    }
  },
}
</script>

<style lang="less" scoped>
</style>