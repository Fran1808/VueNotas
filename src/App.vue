<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";

</script>

<template>
    <Home />  
    <router-view />  
    <Footer /> 
</template>

<style>
.main-container{
    margin:50px;
    min-height:250px;
}
h1{
    text-align:center;
    font-size:42px;
    
}
</style>
