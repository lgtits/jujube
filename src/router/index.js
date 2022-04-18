import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Jujubes from '../views/Jujubes.vue'
import Introduction from '../views/Introduction.vue'
import Preserved from '../views/Preserved.vue'
import Shipping from '../views/Shipping.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/jujubes',
    name: 'Jujubes',
    component: Jujubes
  },
  {
    path: '/jujubes/introduction',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/jujubes/preserved',
    name: 'Preserved',
    component: Preserved
  },
    {
    path: '/jujubes/shipping',
    name: 'Shipping',
    component: Shipping
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
