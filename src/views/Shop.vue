<script setup>
    import {ref, reactive, onMounted} from 'vue';
    import { RouterLink } from 'vue-router';
    import ProductCard from '../components/product/ProductCard.vue';

    import useProductStore from '../stores/productStore';
    const productStore = useProductStore();

    onMounted(() => {
        productStore.getProducts();
        productStore.getCategories();
    });
    

</script>
<template>
    <section class="border-b container flex-grow lg:flex lg:flex-row lg:py-10 max-w-screen mx-auto py-5">
        <section class="flex-shrink-0 hidden lg:block px-4 w-[300px]">
            <!-- <div class="border-b flex pb-5">
                <div class="w-full">
                    <p class="font-medium mb-3">CATEGORIES</p>
                    <div v-for="(category,index) in productStore.categories" :key="index" class="flex justify-between w-full">
                        <div class="flex items-center justify-center"> 
                            <input type="checkbox">
                            <router-link :to="`/shop/category/${category}`" class="ml-4">{{ category }}</router-link>
                        </div>
                        <div>
                            <p class="text-gray-500">(12)</p>
                        </div>
                    </div>                 
                </div>
            </div> -->
            <!-- <div class="border-b flex py-5">
                <div class="w-full">
                    <p class="font-medium mb-3">BRANDS</p>
                    <div class="flex justify-between w-full">
                        <div class="flex items-center justify-center"> <input type="checkbox">
                            <p class="ml-4">APEX</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(12)</p>
                        </div>
                    </div>
                    <div class="flex justify-between w-full">
                        <div class="flex items-center justify-center"> <input type="checkbox">
                            <p class="ml-4">Call of SOFA</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(15)</p>
                        </div>
                    </div>
                    <div class="flex justify-between w-full">
                        <div class="flex items-center justify-center"> <input type="checkbox">
                            <p class="ml-4">Puff B&amp;G</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(14)</p>
                        </div>
                    </div>
                    <div class="flex justify-between w-full">
                        <div class="flex items-center justify-center"> <input type="checkbox">
                            <p class="ml-4">Fornighte</p>
                        </div>
                        <div>
                            <p class="text-gray-500">(124)</p>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="border-b flex py-5">
                <div class="w-full">
                    <p class="font-medium mb-3">PRICE</p>
                    <div class="flex w-full">
                        <div class="flex justify-between"> <input x-mask="99999" class="border h-8 pl-2 w-[90px]"
                                placeholder="50"> <span class="px-3">-</span> <input x-mask="999999"
                                class="border h-8 pl-2 w-[90px]" placeholder="99999"> </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="border-b flex py-5">
                <div class="w-full">
                    <p class="font-medium mb-3">SIZE</p>
                    <div class="flex gap-2">
                        <div
                            class="active:ring-2 active:ring-gray-500 border cursor-pointer duration-100 flex focus:ring-2 focus:ring-gray-500 h-8 hover:bg-neutral-100 items-center justify-center w-8">
                            XS </div>
                        <div
                            class="active:ring-2 active:ring-gray-500 border cursor-pointer duration-100 flex focus:ring-2 focus:ring-gray-500 h-8 hover:bg-neutral-100 items-center justify-center w-8">
                            S </div>
                        <div
                            class="active:ring-2 active:ring-gray-500 border cursor-pointer duration-100 flex focus:ring-2 focus:ring-gray-500 h-8 hover:bg-neutral-100 items-center justify-center w-8">
                            M </div>
                        <div
                            class="active:ring-2 active:ring-gray-500 border cursor-pointer duration-100 flex focus:ring-2 focus:ring-gray-500 h-8 hover:bg-neutral-100 items-center justify-center w-8">
                            L </div>
                        <div
                            class="active:ring-2 active:ring-gray-500 border cursor-pointer duration-100 flex focus:ring-2 focus:ring-gray-500 h-8 hover:bg-neutral-100 items-center justify-center w-8">
                            XL </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="flex py-5">
                <div class="w-full">
                    <p class="font-medium mb-3">COLOR</p>
                    <div class="flex gap-2">
                        <div
                            class="active:ring-2 active:ring-gray-500 bg-gray-600 border border-white cursor-pointer focus:ring-2 focus:ring-gray-500 h-8 w-8">
                        </div>
                        <div
                            class="active:ring-2 active:ring-gray-500 bg-violet-900 border border-white cursor-pointer focus:ring-2 focus:ring-gray-500 h-8 w-8">
                        </div>
                        <div
                            class="active:ring-2 active:ring-gray-500 bg-red-900 border border-white cursor-pointer focus:ring-2 focus:ring-gray-500 h-8 w-8">
                        </div>
                    </div>
                </div>
            </div> -->
        </section>

        <div>
            <div class="flex items-center justify-between mb-5 px-5">
                <div class="flex gap-3"> 
                    <button class="border flex items-center justify-center px-6 py-2"> Sort by 
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 mx-2 w-4" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg> 
                    </button> 
                    <button class="border flex items-center justify-center md:hidden px-6 py-2">
                        Filters 
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 mx-2 w-4" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg> 
                    </button> 
                </div>
                <div class="gap-3 hidden lg:flex"> 
                    <button class="bg-amber-400 border px-2 py-2"> 
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25zM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25z"> </path>
                        </svg> 
                    </button> 
                    <button class="border px-2 py-2"> 
                        <svg fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"></path>
                        </svg> 
                    </button> 
                </div>
            </div>
            <div class="grid grid-cols-1 mt-6 gap-4 lg:grid-cols-3 lg:gap-6">
                <ProductCard v-for="product in productStore.products" key="product.id" :product="product"></ProductCard>
            </div>
        </div>

    </section>
</template>