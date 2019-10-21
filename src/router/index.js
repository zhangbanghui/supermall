import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('views/cart/Cart')
const Home = () => import('views/home/Home')
const Categroy = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Categroy
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router