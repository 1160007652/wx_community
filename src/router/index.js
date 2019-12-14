import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Identity from '../pages/Identity'
import Pay from '../pages/pay'
import Detail from '../components/payTabs/PaidDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/identity',
      name: 'Identity',
      component: Identity
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
