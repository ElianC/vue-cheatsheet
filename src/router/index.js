import { createRouter, createWebHistory } from 'vue-router';
import PassThrough from '@/components/PassThrough.vue';
import Home from '../views/Home.vue';
import Admin from '@/views/Admin.vue';
import Login from '@/components/admin/Login.vue';
import AdminHome from '@/components/admin/AdminHome.vue';
import User from '@/components/admin/Users/User.vue';
import UsersList from '@/components/admin/Users/UsersList.vue';
import Product from '@/components/admin/Products/Product.vue';
import ProductsList from '@/components/admin/Products/ProductsList.vue';
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
    /**
     * Verify if visitor is connected
     * (check if mean-token saved on local storage)
     */
    beforeEnter: (to, from, next) => {
      // reject the navigation
      if (!isLoggedIn()) {
        next({path: '/login', query: {exceptedPath: to.fullPath}});
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
        component: PassThrough,
        name: 'Users',
        children: [
          {
            path: '',
            component: UsersList
          },
          {
            path: ':id',
            component: User
          }
        ]
      },
      {
        path: 'products',
        component: PassThrough,
        children: [
          {
            path: '',
            component: ProductsList
          },
          {
            path: ':id',
            component: Product,
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
