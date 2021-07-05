import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('../views/home/home.vue')
const cart = () => import('../views/cart/cart.vue')
const categary = () => import('../views/categray/categary.vue')
const profile = () => import('../views/profile/profile.vue')

const routes = [
  { path: '', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/categary', component: categary },
  { path: '/cart', component: cart },
  { path: '/profile', component: profile }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
