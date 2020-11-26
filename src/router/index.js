import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import AllCourse from '../views/AllCourse'
import MineCourse from '../views/MineCourse'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/allCourse',
    component: AllCourse
  },
  {
    path: '/mineCourse',
    component: MineCourse
  }
]
const myRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 解决重复点击相同路由报错问题
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {return routerPush.call(this, location).catch(error => error)
// }
// const VueRouterReplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace (to) {
//   return VueRouterReplace.call(this, to).catch(err => err)
// }
export default myRouter
