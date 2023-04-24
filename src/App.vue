<template>
  <AppHeader />
  <main class="page-main"><RouterView /></main>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/app-header/AppHeader.vue";
</script>

<style scoped></style>