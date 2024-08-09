<template>
  <button
    @click="isCreate = true"
    class="bg-[#DC143C] text-white p-3 font-semibold capitalize rounded cursor-pointer"
  >
    Create new user
  </button>
  <div
    v-if="isCreate"
    class="p-3 my-4 border border-gray-300 border-solid rounded"
  >
    <div class="flex flex-wrap items-end gap-3">
      <label
        for="userName"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        UserName
      </label>
      <input
        v-model="form.username"
        id="userName"
        class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72"
      />
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Password
      </label>
      <input
        v-model="form.password"
        id="password"
        type="password"
        class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72"
      />
      <label for="role" class="block mb-2 text-sm font-medium text-gray-900">
        Role
      </label>
      <select
        v-model="form.role"
        class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-72"
      >
        <option v-for="item of ROLE_SELECT" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>
    <p class="font-bold text-red-400" v-if="form.error">
      {{ ERROR_EMPTY }}
    </p>
    <button
      @click="onSubmit"
      class="my-4 mr-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#c97284] to-[#dc143c] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#dc143c] transition-transform duration-200 ease-in-out hover:scale-[1.03]"
    >
      Save
    </button>
    <button
      @click="isCreate = false"
      class="my-4 cursor-pointer text-center rounded-md bg-gradient-to-br from-[#adadad] to-[#a1a1a1] px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md shadow-[#969696] transition-transform duration-200 ease-in-out hover:scale-[1.03]"
    >
      Close
    </button>
  </div>
  <p class="my-5 text-xl font-semibold">User Management</p>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 rtl:text-right">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Role</th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3"></th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of listUser" class="bg-white border-b">
          <td class="px-6 py-4">
            {{ item.username }}
          </td>
          <td></td>
          <td></td>
          <td class="px-6 py-4">{{ item?.role }}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="px-6 py-4 mr-5">
            <button
              class="mr-5 font-medium text-blue-600 underline"
              @click="detailBooking(item.bookingRef)"
            >
              Edit
            </button>
            <button
              class="font-medium text-red-600 underline"
              @click="deleteUser(item)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ROLE_SELECT } from "../../utils/constants";
import { ApiAuthGetUser, ApiAuthRegister } from "../../api/auth";

const ERROR_EMPTY = "Input can not be empty !";
const initialValues = {
  username: "",
  password: "",
  role: "",
  error: false,
};
let form = reactive({ ...initialValues });
const isCreate = ref(false);
const listUser = ref([]);
const listUserBackup = ref([]);

onMounted(async () => {
  try {
    const response = await ApiAuthGetUser();
    const users = response.data.data;
    listUserBackup.value = users;

    console.log(users);
    listUser.value = users.filter((item) => item.role !== "ADMIN");
  } catch (error) {
    console.error("Error loading users:", error);
  }
});

const onSubmit = async () => {
  const compare = listUserBackup.value.every(
    (item) => item.username !== form.username
  );

  if (!form.username || !form.password || !form.role) {
    form.error = true;
  } else if (!compare) {
    form.error = false;
    alert("Username is already exist!");
  } else {
    form.error = false;

    try {
      const payload = {
        username: form.username,
        password: form.password,
        role: form.role,
      };

      const response = await ApiAuthRegister(payload);

      if (response && response.data) {
        listUserBackup.value = [...listUserBackup.value, payload];
        listUser.value = [...listUser.value, payload];

        // Reset form
        form = reactive({ ...initialValues });
        isCreate.value = false;

        alert("User registered successfully!");
      } else {
        alert("Failed to register user.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error occurred while registering user.");
    }
  }
};

const deleteUser = (user) => {
  listUserBackup.value = listUserBackup.value.filter(
    (item) => item.username !== user.username
  );
  listUser.value = listUser.value.filter(
    (item) => item.username !== user.username
  );
};
</script>

<style lang="scss" scoped></style>
