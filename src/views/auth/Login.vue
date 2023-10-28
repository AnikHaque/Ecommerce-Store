<script setup>
import { onMounted, ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';

import useAuthStore from '../../stores/authStore';
const authStore  = useAuthStore();


const formData = reactive({
    username: 'kminchelle',
    password: '0lelplR'
});

</script>
<template>
  <div class="flex min-h-screen w-screen items-center justify-center text-gray-600 bg-gray-50">
    <div class="relative">
      <!-- Register -->
      <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
        <div class="flex-auto p-6">
          <!-- Logo -->
          <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
            <a href="#" class="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
              <span class="flex-shrink-0 text-3xl font-black tracking-tight opacity-100">Vue Shop</span>
            </a>
          </div>
          <!-- /Logo -->
          <!-- <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to Vue Shop</h4> -->
          <!-- <p class="mb-6 text-gray-500">Please sign-in to access your account</p> -->

          <form id="" class="mb-4" action="#" method="POST">
            <div class="mb-4">
              <label for="email" class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Email or
                Username</label>
              <input v-model="formData.username" type="text"
                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                id="email" name="email-username" placeholder="Enter your email or username" autofocus="" />
            </div>
            <div class="mb-4">
              <div class="flex justify-between">
                <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  for="password">Password</label>
                <a href="auth-forgot-password-basic.html"
                  class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                  <small class=" ">Forgot Password?</small>
                </a>
              </div>
              <div class="relative flex w-full flex-wrap items-stretch">
                <input v-model="formData.password" type="password" id="password"
                  class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  name="password" placeholder="············" />
              </div>
            </div>
            <div class="mb-4">
              <div class="block">
                <input
                  class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-indigo-500 focus:border-indigo-500 focus:shadow"
                  type="checkbox" id="remember-me"
                  style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)"
                  checked />
                <label class="inline-block" for="remember-me"> Remember Me </label>
              </div>
            </div>
            <div class="mb-4">
              <button @click.prevent="authStore.login(formData)"
                class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                type="submit">Sign in</button>
            </div>
          </form>

        <p class="mb-4 text-center">
          New on futurism?
          <a href="#" class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"> Create an account </a>
        </p>
      </div>
    </div>
    <!-- /Register -->
  </div>
</div>
</template>