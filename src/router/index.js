import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import indexMain from '../components/pages/indexMain.vue'
import sharePage from '../components/pages/sharePage.vue'
import articlePage from '../components/pages/articlePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexMain',
      component: indexMain
      // redirect: '/'
    },
    {
      path: '/share',
      name: 'sharePage',
      component: sharePage
      // redirect: '/'
    },
    {
      path: '/article',
      name: 'articlePage',
      component: articlePage
      // redirect: '/'
    }
  ]
})
