import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Home from '../pages/home'
*/
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
          path:'msg',
          component: Msg
      }
    ]
  }
]
export default new VueRouter({
  routes
})
