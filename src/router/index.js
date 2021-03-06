import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Sign in'
import Login from '../views/Log in'
import Home from '../views/Home'
import Profile from '../views/Profile'
import List from '../views/List'
import Add from '../views/Add'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
