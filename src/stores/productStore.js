import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const baseURL = 'https://dummyjson.com';

const useProductStore = defineStore('product', () => {

    const products = ref([]);
    const product = ref({});
    const categories = ref([]);
    const totalProducts = computed(() => products.length);

    async function getProducts(){
        const res = await fetch(`${baseURL}/products`);
        const data = await res.json();

        products.value = data.products;
    }

    async function getProduct(id){
        const res = await fetch(`${baseURL}/products/${id}`);
        const data = await res.json();

        product.value = data;
    }

    async function searchProducts(query){
        const res = await fetch(`${baseURL}/products/search?q=${query}`);
        const data = await res.json();

        products.value = data.products;
    }

    async function getCategories(){
        const res = await fetch(`${baseURL}/product/categories`);
        const data = await res.json();
        categories.value = data;
    }

    async function getCategoryProducts(category){
        const res = await fetch(`${baseURL}/products/category/${category}`);
        const data = await res.json();
        products.value = data.products;
    }

    return { products, product, totalProducts, categories, getProducts, getProduct , getCategories, getCategoryProducts, searchProducts }
})

export default useProductStore;