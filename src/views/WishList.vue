<script setup>
import ProductCard from '../components/product/ProductCard.vue';
import wishList from '../stores/wishList';

const wishListStore = wishList();
</script>
<template>
    <div class="grid grid-cols-1 mt-6 gap-4 lg:grid-cols-4 lg:gap-6">
        <ProductCard v-for="product in wishListStore.items" key="product.id" :product="product"></ProductCard>
    </div>
</template>