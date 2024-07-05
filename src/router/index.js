import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const path = {
  ROOT: '/home',
  ABOUT: '/about',
  AVAILABLECAR: '/available-car',
  MANAGEBOOKING: '/manage-booking',
  LOGIN: '/login'
};

const routes = [
  {
    path: '/',
    redirect: path.ROOT,
  },
  {
    path: '/',
    name: 'LayoutCommon',
    component: () => import('../shared/LayoutCommon/LayoutCommon.vue'),
    children: [
      {
        path: path.ROOT,
        component: () => import('../components/HomePage/HomePage.vue'),
      },
      {
        path: path.ABOUT,
        component: () => import('../components/AboutPage/AboutPage.vue'),
      },
      {
        path: path.AVAILABLECAR,
        component: () =>
          import('../components/AvailableCarPage/AvailableCarPage.vue'),
      },
      {
        path: path.MANAGEBOOKING,
        component: () =>
          import('../components/ManageBooking/ManageBooking.vue'),
      },
      {
        path: path.LOGIN,
        component: () => import('../components/LoginPage/LoginPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
