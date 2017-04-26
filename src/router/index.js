import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/pages/Start'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
