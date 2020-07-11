import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodslist: []
  },
  mutations: {
    //加之前避免重复数据，count一定要写在存的数据对象里
    addcat (state, goods) {
      let realgoods = state.goodslist.find(item => item.iid === goods.iid)
      if (realgoods) {
        goods.count += 1
      } else {
        goods.count = 1
        state.goodslist.push(goods)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
