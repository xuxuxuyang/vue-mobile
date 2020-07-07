<template>
  <div class=''>
    <mt-header title="商品详情页面"
               class="detailheader">
      <router-link to="/"
                   slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>{{iid}}</div>
  </div>
</template>

<script>
import { getgoodsitems } from 'network/detail'
export default {
  created () {
    this.iid = this.$route.params.iid
    console.log(this.iid);
    getgoodsitems(this.iid).then(res => {
      console.log(res);
    })

  },
  components: {},
  props: {},
  data () {
    return {
      iid: null
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.detailheader {
  background-color: pink;
}
</style>