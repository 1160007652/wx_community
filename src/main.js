// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import '../static/css/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'  //引入vue-awesome-swiper
import 'swiper/dist/css/swiper.css'
import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
 
var options = {
  title: '',
}
Vue.use(Alert, options)
Vue.use(Confirm, options)
Vue.use(Toast, options)


Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, options)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
