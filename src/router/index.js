import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

<<<<<<< HEAD
const path = {
  ROOT: '/home',
  ABOUT: '/about',
  AVAILABLECAR: '/available-car',
  MANAGEBOOKING: '/manage-booking',
  LOGIN: '/login'
=======
const PREFIX_PATH_ADMIN = "/admin";

export const PATH = {
  ROOT: "/home",
  ABOUT: "/about",
  AVAILABLECAR: "/available-car",
  CART: "/cart",
  MANAGEBOOKING: "/manage-booking",
  BOOKING_SUCCESS: "/booking-success",
  LOGIN: "/login",
  DASH_BOARD: PREFIX_PATH_ADMIN + "/dashboard",
  BOOKING_ADMIN: PREFIX_PATH_ADMIN + "/booking",
  DETAIL_BOOKING: PREFIX_PATH_ADMIN + "/booking/:id",
  CAR_ADMIN: PREFIX_PATH_ADMIN + "/car",
>>>>>>> 74a81229cb040af8808fc22efde3df3aacb53989
};

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    redirect: path.ROOT,
=======
    path: "/",
    redirect: PATH.ROOT,
>>>>>>> 74a81229cb040af8808fc22efde3df3aacb53989
  },
  {
    path: '/',
    name: 'LayoutCommon',
    component: () => import('../shared/LayoutCommon/LayoutCommon.vue'),
    children: [
      {
<<<<<<< HEAD
        path: path.ROOT,
        component: () => import('../components/HomePage/HomePage.vue'),
      },
      {
        path: path.ABOUT,
        component: () => import('../components/AboutPage/AboutPage.vue'),
=======
        path: PATH.ROOT,
        component: () => import("../components/HomePage/HomePage.vue"),
      },
      {
        path: PATH.ABOUT,
        component: () => import("../components/AboutPage/AboutPage.vue"),
>>>>>>> 74a81229cb040af8808fc22efde3df3aacb53989
      },
      {
        path: PATH.AVAILABLECAR,
        component: () =>
          import('../components/AvailableCarPage/AvailableCarPage.vue'),
      },
      {
        path: PATH.CART,
        component: () => import("../components/CartPage/CartPage.vue"),
      },
      {
        path: PATH.LOGIN,
        component: () => import("../components/LoginPage/LoginPage.vue"),
      },
      {
        path: PATH.MANAGEBOOKING,
        component: () =>
          import('../components/ManageBooking/ManageBooking.vue'),
      },
      {
<<<<<<< HEAD
        path: path.LOGIN,
        component: () => import('../components/LoginPage/LoginPage.vue'),
=======
        path: PATH.BOOKING_SUCCESS,
        component: () =>
          import("../components/CongratulationPage/CongratulationPage.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "AdminLayout",
    component: () => import("../shared/AdminLayout/AdminLayout.vue"),
    children: [
      {
        path: PATH.DASH_BOARD,
        component: () => import("../components/Dashboard/Dashboard.vue"),
      },
      {
        path: PATH.BOOKING_ADMIN,
        component: () => import("../components/BookingAdmin/BookingAdmin.vue"),
      },
      {
        path: PATH.CAR_ADMIN,
        component: () => import("../components/CarAdmin/CarAdmin.vue"),
      },
      {
        path: PATH.DETAIL_BOOKING,
        component: () =>
          import("../components/DetailBooking/DetailBooking.vue"),
>>>>>>> 74a81229cb040af8808fc22efde3df3aacb53989
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
