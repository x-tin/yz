import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import '../src/assets/css/resetVui.css'
import { Tabbar, TabbarItem, NavBar, Toast, Swipe, SwipeItem, PullRefresh } from 'vant'

Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(PullRefresh)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
