import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { protected: true }
  },
  {
    path: '/profile/:userId',
    component: () => import('../views/Profile.vue'),
    meta: { protected: true },
    children: [{
        path: '',
        component: () => import('../views/parts/ProfileHome.vue'),
        meta: { protected: true }
      },
      {
        path: 'skills',
        component: () => import('../views/parts/ProfileSkills.vue'),
        meta: { protected: true }
      },
      {
        path: 'portfolios',
        component: () => import('../views/parts/ProfilePortfolios.vue'),
        meta: { protected: true }
      }, {
        path: 'pic',
        component: () => import('../views/parts/ProfilePic.vue'),
        meta: { protected: true }
      }
    ]
  },
  {
    path: '/jobs/:id/show',
    name: 'JobsShow',
    component: () => import('../views/JobsView.vue'),
    meta: { protected: true }
  },
  {
    path: '/jobs/new',
    name: 'JobsNew',
    component: () => import('../views/JobsNew.vue'),
    meta: { protected: true }
  },
  {
    path: '/jobs/:id/edit',
    name: 'JobsEdit',
    component: () => import('../views/JobsEdit.vue'),
    meta: { protected: true }
  },
  {
    path: '/jobs/:id/application/new',
    name: 'ApplicationNew',
    component: () => import('../views/ApplicationNew.vue'),
    meta: { protected: true }
  },
  {
    path: '/jobs/:id/application/:applicationId/edit',
    name: 'ApplicationEdit',
    component: () => import('../views/ApplicationEdit.vue'),
    meta: { protected: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router