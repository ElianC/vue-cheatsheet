import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '@/views/Admin.vue';
import Login from '@/components/admin/Login.vue';
import  AdminHome from '@/components/admin/AdminHome.vue';
import  userList from '@/components/admin/Users/userList.vue';

import { isLoggedIn } from '@/services/api/auth';
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
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      // reject the navigation
      if (!isLoggedIn()) {
        next('/login');
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        redirect: '/admin/home'
      },
      {
        path: 'home',
        component: AdminHome,
      },
      {
        path: 'users',
        name: 'Users',
        component: userList
        // children: [
        //   {
        //     path: '',
        //     component: userList
        //   }
        // ]
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
