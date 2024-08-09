<template>
  <div class="bg-[#E5E7EB] p-5 flex justify-between">
    <div class="flex gap-3">
      <div
        v-for="item of listNav"
        :class="
          (activeNav(item.router) ? 'bg-[#DC143C] text-white' : 'bg-white') +
          ' p-3 font-semibold capitalize rounded cursor-pointer'
        "
        @click="navigateRouter(item.router)"
      >
        {{ item.label }}
      </div>
    </div>
    <div>
      <div
        class="p-3 font-semibold capitalize bg-white rounded cursor-pointer"
        @click="logout"
      >
        Logout
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { LOCAL_DATA } from "../../utils/constants";
import { onMounted, ref } from "vue";
import { KEY, getCookie, removeCookie } from "../../utils/cookie";

const listNav = ref([
  {
    label: "Dashboard",
    router: "/admin/dashboard",
  },
  {
    label: "Booking Management",
    router: "/admin/booking",
  },
  {
    label: "Car Management",
    router: "/admin/car",
  },
]);
const router = useRouter();
const route = useRoute();
const navigateRouter = (pathName) => {
  router.push(pathName);
};
const activeNav = (pathName) => {
  return route.path === pathName;
};
const logout = () => {
  router.push("/admin");
  removeCookie(KEY.ROLE);
  removeCookie(KEY.USERNAME);
  removeCookie(KEY.TOKEN);
};

onMounted(() => {
  const role = getCookie(KEY.ROLE);
  if (role && role === "ADMIN") {
    listNav.value = [
      ...listNav.value,
      {
        label: "User Management",
        router: "/admin/user",
      },
      {
        label: "Test Report",
        router: "/admin/test",
      },
    ];
  }
});
</script>

<style lang="scss" scoped></style>
