<template>
  <div class='recommends'>
    <div v-for="(item,index) in recommends"
         :key="index">
      <a :href="item.link">
        <img :src="item.image"
             alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommends: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.recommends {
  display: flex;
  padding: 5px;
  text-align: center;
  border-bottom: 8px solid #eee;
}
.recommends div {
  padding: 5px;
}
.recommends img {
  width: 100%;
  height: 80px;
}
.recommends span {
  font-size: 12px;
}
</style>