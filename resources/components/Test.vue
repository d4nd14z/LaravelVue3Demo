<template>
    <div class="mx-auto">
        <navbar>
            <router-link :to="{name:'Home'}">Home</router-link>
            <router-link :to="{name:'Login'}">Login</router-link>
            <router-link :to="{name:'Register'}">Register</router-link>
        </navbar>
    </div>
</template>
<script setup>
    const title = "Este es el componente test de prueba";
</script>
<style scoped>
    
</style>