import { createRouter, createWebHistory } from "vue-router";
import { getCookie, KEY } from "../utils/cookie";

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
  ADMIN_LOGIN: PREFIX_PATH_ADMIN,
  BOOKING_ADMIN: PREFIX_PATH_ADMIN + "/booking",
  DETAIL_BOOKING: PREFIX_PATH_ADMIN + "/booking/:id",
  CAR_ADMIN: PREFIX_PATH_ADMIN + "/car",
  USER_ADMIN: PREFIX_PATH_ADMIN + "/user",
};

const routes = [
  {
    path: "/",
    redirect: PATH.ROOT,
  },
  {
    path: "/",
    name: "LayoutCommon",
    component: () => import("../shared/LayoutCommon/LayoutCommon.vue"),
    children: [
      {
        path: PATH.ROOT,
        component: () => import("../components/HomePage/HomePage.vue"),
      },
      {
        path: PATH.ABOUT,
        component: () => import("../components/AboutPage/AboutPage.vue"),
      },
      {
        path: PATH.AVAILABLECAR,
        component: () =>
          import("../components/AvailableCarPage/AvailableCarPage.vue"),
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
          import("../components/ManageBooking/ManageBooking.vue"),
      },
      {
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
      },
      {
        path: PATH.USER_ADMIN,
        component: () => import("../components/AdminUser/AdminUser.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("../shared/AuthLayout/AuthLayout.vue"),
    children: [
      {
        path: PATH.ADMIN_LOGIN,
        component: () => import("../components/AdminLogin/AdminLogin.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRouter = [
    PATH.BOOKING_ADMIN,
    PATH.CAR_ADMIN,
    PATH.DETAIL_BOOKING,
    PATH.DASH_BOARD,
  ];
  const isLogin = getCookie(KEY.TOKEN);
  if (authRouter.includes(to.path)) {
    if (isLogin) {
      next();
    } else {
      next("/admin");
    }
  } else {
    next();
  }
});

export default router;
