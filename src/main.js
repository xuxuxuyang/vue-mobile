import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Vant from 'vant';
import 'vant/lib/index.css';

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Vant);

Vue.use(MintUI)

// 解决移动端300ms的延迟 三步：1.安装install... 2.导入import... 3.FastClick.attach(document.body)
FastClick.attach(document.body)
//使用图片懒加载,后传对象做特殊需求
Vue.use(VueLazyLoad, {
  //懒加载等待时的替代图片
  // loding: require('./assets/img/common/palceholder.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
