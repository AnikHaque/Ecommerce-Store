<script setup></script>
<template>
    <div class="mx-auto my-10 flex max-w-md flex-col rounded-lg border px-8 py-10 shadow-lg">
  <p class="text-xl font-medium">Please check your email</p>
  <p class="mb-4 text-lg text-gray-500">We've sent a code to jim@gmail.com</p>
  <div class="mb-2 flex space-x-4">
    <p class="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">3</p>
    <p class="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">0</p>
    <p class="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">9</p>
    <p class="flex h-16 w-16 items-center justify-center rounded-xl border text-4xl font-medium sm:h-20 sm:w-20 sm:text-6xl">7</p>
  </div>
  <p class="mb-4 text-gray-500">Didn't get a code? <button class="underline">Click to resend</button></p>
  <div class="flex flex-col sm:flex-row">
    <button class="mb-2 w-full rounded-md border px-8 py-2 font-medium sm:mr-4 sm:mb-0 hover:bg-gray-100">Cancel</button>
    <button class="w-full rounded-md border bg-gray-700 px-8 py-2 font-medium text-white hover:bg-gray-800">Verify</button>
  </div>
</div>

</template>