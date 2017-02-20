import Vue from 'vue'
import VueRouter from 'vue-router'

// 开启
Vue.use(VueRouter)

// 当路由和组件都太多的时候，可拆分本路由
import Foo from '../components/Foo'
import Bar from '../components/Bar'

// 路由列表
const routes = [
  { path: '/foo/:id', component: Foo },
  { path: '/bar', component: Bar }
]

// 实例化
const router = new VueRouter({
  routes
})

// 处理
// router.beforeEach((to, from, next) => {
//   next() // next一定要执行
// })

export default router