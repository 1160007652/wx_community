import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Identity from '../pages/Identity'
import Pay from '../pages/pay'
import Detail from '../components/payTabs/PaidDetail'
import Myself from '../pages/myself'  //我的
import ChoiceCommunity from '../pages/choiceCommunity'  //选择社区

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
    },
    {
      path: '/myself',
      name: 'Myself',
      component: Myself
    },
    {
      path: '/choiceCommunity',
      name: 'ChoiceCommunity',
      component: ChoiceCommunity
    }
  ]
})
