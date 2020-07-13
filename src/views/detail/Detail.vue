<template>
  <div class=''>
    <mt-header title="商品详情页面"
               class="detailheader">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 测试时间戳格式化显示 -->
    <div>{{nowtime|formatDate}}</div>
    <!-- 测试mixins混入 -->
    <div>{{num}}</div>
    <!-- 测试把数据存进VueX里 -->
    <button @click="addcat()">加入购物车</button>
  </div>
</template>

<script>
import { getgoodsitems } from 'network/detail'
// 用es6的class类来整理分散的数据资源 同一到一个对象方便使用
import { Goods } from './class'
import { formatDate } from './utils'
//导入混入的mixins 各个组件都复用的代码，可以用mixins简化代码
import { mixinsdata } from '../../common/mixins'
export default {
  //有重复的代码可以使用mixins混入技术 类似于组件抽取复用 []里写混入对象名
  mixins: [mixinsdata],
  // 时间戳格式化显示需要用到过滤器filters
  filters: {
    formatDate (time) {
      let date = new Date(time)
      console.log(new Date(time))
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  name: "Detail",
  created () {
    this.iid = this.$route.params.iid
    console.log(this.iid);
    getgoodsitems(this.iid).then(res => {
      // 在created中获取数据,先获取零散的数据在把零散的数据传进class类的参数 再new一个对象实例整合再一起
      console.log(res);
      this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      console.log(this.goods);
    })
    const data = +new Date()
    this.nowtime = data
  },
  mounted () {
    console.log(888);
  },
  components: {},
  props: {},
  data () {
    return {
      iid: null,
      detaildata: {},
      goods: {},
      nowtime: 0
    }
  },
  computed: {},
  methods: {
    addcat () {
      // goods ={}
      //找到对应的数据赋值给这个对象
      // addgoods.image = this.goods.image
      // addgoods.title = this.goods.title
      // ....
      // ....
      // ....
      //操作vueX的数据一定要用vueX里的方法！
      this.$store.dispatch('addcat', this.goods)
      console.log(this.$store.state.goodslist);
    }
  },
}
</script>

<style lang="less" scoped>
.detailheader {
  background-color: pink;
}
</style>