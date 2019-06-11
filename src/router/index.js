import Vue from 'vue'
import Router from 'vue-router'
import cart from '@/components/cart'
import address from '@/components/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'cart',
        component: cart
    },
    {
    	path: '/address',
    	name: 'address',
    	component: address
    }
  ]
})
