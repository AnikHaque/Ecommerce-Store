import {ref, reactive } from 'vue';
import router from '../router/index';
import { defineStore } from 'pinia';

import { useToast } from 'vue-toastification'
const toast = useToast();

const baseURL = 'https://dummyjson.com';

const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref();
    const authenticatedUser = ref({});
    const profile = reactive({});

    if(JSON.parse(localStorage.getItem('authenticatedUser')))
        authenticatedUser.value = JSON.parse(localStorage.getItem('authenticatedUser'));

    if(JSON.parse(localStorage.getItem('profile')))
        Object.assign('profile',JSON.parse(localStorage.getItem('profile')));

    function login(formData){
        fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                username: formData.username,
                password: formData.password,
            })
        })
        .then(res => res.json())
        .then(async (res) => {
            isAuthenticated.value = true;
            authenticatedUser.value = res;
            localStorage.setItem('isAuthenticated', isAuthenticated.value);
            localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser.value));
            
            router.push('/');
        });
    }

    function logout(){
        isAuthenticated.value = false;
        authenticatedUser.value = {};
        Object.assign('profile',{});

        localStorage.setItem('isAuthenticated', isAuthenticated.value);
        localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser.value));
        localStorage.setItem('profile', JSON.stringify(profile));

        router.push('/login');
    }

    async function getProfile(){
        await fetch(`${baseURL}/auth/users/${authenticatedUser.value.id}`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${authenticatedUser.value.token}`, 
            'Content-Type': 'application/json'
            }, 
        })
        .then(res =>  res.json())
        .then(res => {
            localStorage.setItem('profile', JSON.stringify(res));
            Object.assign(profile, res);
        });
    }

    return { isAuthenticated, authenticatedUser, login, logout, profile, getProfile};

});

export default useAuthStore;