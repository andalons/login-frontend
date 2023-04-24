<template>
    <header class="page-header">  
      <div class="button-wrapper">
        <button @click="logout" v-if="userStore.token">Log out</button>
      </div>
      <nav class="page-nav">
        <RouterLink class="routerlink" to="/login" v-if="!userStore.token">Log in</RouterLink>
        <RouterLink class="routerlink" to="/register" v-if="!userStore.token">Register</RouterLink>
        <RouterLink class="routerlink" to="/" v-if="userStore.token">Home</RouterLink>
        <RouterLink class="routerlink" to="/profile" v-if="userStore.token">Profile</RouterLink>
      </nav>
    </header>
  </template> 
  
<script setup>
import { RouterLink, useRouter} from "vue-router";
import { useUserStore } from "../../stores/userStore.js";

const userStore = useUserStore();
const router = useRouter();

const logout = async () => {
  await userStore.logout();
  router.push("/login");
};

  </script>
  
  <style lang="scss">
  @import "./AppHeader.scss";
  </style>