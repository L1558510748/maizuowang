import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Toast,List,Cell, IndexBar, IndexAnchor,Icon} from 'vant'
Vue.config.productionTip = false
Vue.use(Button).use(Toast).use(List).use(Cell).use(IndexBar).use(IndexAnchor).use(Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
