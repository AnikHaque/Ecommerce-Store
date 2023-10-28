<script setup>
</script>

<template>
  <footer class="bg-gray-50">
    <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
      <div class="max-w-sm">
        <div class="mb-6 flex h-12 items-center space-x-2">
          <span class="text-2xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-16 h-16">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
            Vue Shop

          </span>
        </div>
        <div class="text-gray-500">Your best destination to buy quality goods</div>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-semibold xl:mb-4">Address</div>
        <div class="text-gray-500">
          103, BIDC Road <br />
          Khalishpur <br />
          Khulna-9000
        </div>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-semibold xl:mb-4">Quick Links</div>
        <nav aria-label="Footer Navigation" class="text-gray-500">
          <ul class="space-y-3">
            <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
            <li><a class="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
            <li><a class="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="">
        <div class="mt-4 mb-2 font-semibold xl:mb-4">Subscribe to our Newsletter</div>
        <div class="flex flex-col">
          <div class="mb-4">
            <input type="email"
              class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your email" />
            <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div
        class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
        <div class="flex">
          Built with
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-600">
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          and passion by <a href="https://github.com/mehedijaman" class="font-bold px-2 text-[#2070FF]"> Mehedi Jaman</a>
        </div>
        <div class="">
          <a class="" href="#">Privacy Policy</a>
          <span> | </span>
          <a class="" href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>