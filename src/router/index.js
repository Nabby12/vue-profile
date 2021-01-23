import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Sample from '@/components/Sample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    }
  ]
})
