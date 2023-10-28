<script setup>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>