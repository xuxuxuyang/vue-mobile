<template>
  <div class='item'
       @click="itemclick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
    goodsitems: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {

    }
  },
  computed: {},
  methods: {
    itemclick () {
      this.$router.push('/detail/' + this.goodsitems.iid)
    }
  },
}
</script>


<style lang="less" scoped>
</style>