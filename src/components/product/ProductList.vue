<script setup>
    import {ref, reactive, onMounted} from 'vue';
    import { RouterLink } from 'vue-router';
    import ProductCard from './ProductCard.vue';

    import useProductStore from '../../stores/productStore';
    const productStore = useProductStore();
</script>
<template>
  <section class="bg-white py-12 text-gray-700 sm:py-4 lg:py-4">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-4 lg:px-8">
      <div class="mx-auto max-w-md text-center">
        <h2 class="text-2xl font-bold sm:text-3xl">
            <slot></slot>
        </h2>
      </div>

      <div class="grid grid-cols-1 mt-6 gap-4 lg:grid-cols-4 lg:gap-6">
        <ProductCard v-for="product in productStore.products" key="product.id" :product="product"></ProductCard>     
      </div>
    </div>
  </section>
</template>