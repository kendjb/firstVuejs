import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/day01/HelloVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstVuejs/dist/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/firstVuejs/dist/day01',
      name:'HelloVue',
      component:HelloVue
    }
  ]
})
