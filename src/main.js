// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './components/index'
import router from './router'
import VResource from 'vue-resource'
import store from './store/index' // vuex

Vue.use(VResource)
Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // vuex 
  components: { Index },
  template: '<Index/>'
})
