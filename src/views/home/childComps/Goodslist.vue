<template>
  <div class="goodslist">
    <goodsitem v-for="(item,index) in goods"
               :key="index"
               class="goodsitem"
               :goodsitems="item">
      <div class="goodsitems">
        <img :src="item.show.img"
             alt="">
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
  methods: {
  },
}
</script>

<style lang="less" scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goodsitem {
  width: 48%;
  margin-top: 10px;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goodsitem {
    width: 100%;
  }
}
img {
  width: 100%;
  height: 250px;
  border-radius: 5px;
}
span,
p {
  font-size: 10px;
}
</style>