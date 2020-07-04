<template>
  <div class="goodslist">
    <goodsitem v-for="(item,index) in goods"
               :key="index"
               class="goodsitem">
      <div class="item">
        <a :href="item.link">
          <img :src="item.show.img"
               alt="">
        </a>
        <p>{{item.title}}</p>
        <span>{{item.price}}</span>
        <span>
          <mt-badge size="small"
                    color="pink">收藏图标</mt-badge>{{item.cfav}}
        </span>
      </div>
    </goodsitem>
  </div>
</template>

<script>
import goodsitem from './Goodsitem'
export default {
  components: {
    goodsitem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
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
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item {
  width: 200px;
  height: 240px;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
img {
  width: 200px;
  height: 200px;
}
span,
p {
  font-size: 10px;
}
</style>