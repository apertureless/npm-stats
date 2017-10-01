import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/pages/Start'
import Meta from 'vue-meta'

Vue.use(Meta)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartPage
    },
    {
      path: '/:package',
      component: StartPage
    }
  ]
})
