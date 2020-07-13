import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodslist: []
  },
  mutations: {
    //加之前避免重复数据，count一定要写在存的数据对象里
    // mutations里只做单一操作
    addgoods (state, goods) {
      goods.count += 1
    },
    addgoodscount (state, goods) {
      goods.count = 1
      state.goodslist.push(goods)
    }
  },
  actions: {
    // 异步和多步操作放到actions里做
    addcat (context, goods) {
      let realgoods = context.state.goodslist.find(item => item.id === goods.id)
      console.log(realgoods);

      if (realgoods) {
        context.commit('addgoods', goods)
      } else {
        context.commit('addgoodscount', goods)
      }
    }
  },
  modules: {
  }
})
