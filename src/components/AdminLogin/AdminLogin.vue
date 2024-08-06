<template>
  <div class="flex justify-center">
    <div class="p-5 border-4 border-gray-300 border-solid rounded-md">
      <label
        for="userName"
        class="block mb-2 text-sm font-medium text-gray-900">
        UserName
      </label>
      <input
        v-model="form.username"
        id="userName"
        class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72" />
      <p class="font-bold text-red-400" v-if="form.error.username">
        {{ ERROR_EMPTY }}
      </p>
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900">
        Password
      </label>
      <input
        v-model="form.password"
        id="password"
        type="password"
        class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72" />
      <p class="font-bold text-red-400" v-if="form.error.password">
        {{ ERROR_EMPTY }}
      </p>
      <button
        @click="onSubmit"
        class="my-4 mr-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#c97284] to-[#dc143c] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#dc143c] transition-transform duration-200 ease-in-out hover:scale-[1.03]">
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ApiAuthLogin } from "../../api/auth";
import { KEY, setCookie } from "../../utils/cookie";

const router = useRouter();
const ERROR_EMPTY = "Input can not be empty !";
const form = reactive({
  username: "",
  password: "",
  error: {},
});
const onSubmit = async () => {
  const error = {};
  if (!form.username) {
    error.username = true;
  }
  if (!form.password) {
    error.password = true;
  }

  form.error = error;
  if (Object.keys(error).length === 0) {
    try {
      const res = await ApiAuthLogin({
        username: form.username,
        password: form.password,
      });
      setCookie(KEY.TOKEN, res.data.accessToken);
      setCookie(KEY.USERNAME, res.data.username);
      setCookie(KEY.ROLE, res.data.role);
      router.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
