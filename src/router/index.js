import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Shopcat = () => import('../views/shopcat/Shopcat')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shopcat',
    component: Shopcat
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
