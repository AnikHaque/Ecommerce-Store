import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification'
const toast = useToast();

const wishList = defineStore('wishList', () => {
    const URL = 'https://dummyjson.com/products';

    const items = reactive([]);
    const totalItems = computed(() => items.length);

    async function add(product){
        items.push(product);
        toast.success('Product added to Wishlist !');
    }

    async function remove(product){

    }    

    return { items, totalItems, add, remove }
})

export default wishList;