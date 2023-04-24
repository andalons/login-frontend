<template>
  <div class="register-view">
    <p class="register-view__alert" v-if="alertText">{{ alertText }}</p>
    <form class="register-view__form">
      <label>Email</label>
      <input type="email" v-model="email" required>
      <label>Password</label>
      <input type="password" v-model="password" required>
      <label>Verify Password</label>
      <input type="password" v-model="repassword" required>
      <button 
        @click.prevent="handleSubmit" 
        :disabled="isDisable" 
        :class="{ 'register-view__button--disabled' : isDisable}">Register</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useUserStore } from "../../stores/userStore.js";

const userStore = useUserStore();
const router = useRouter();
const email = ref("");
const password = ref("");
const repassword = ref("");
const alertText = ref("");

const isDisable = computed(() => {
  return !email.value.length || !password.value.length || !repassword.value.length
})

const handleSubmit = async () => {
  try {
    await userStore.register(email.value, password.value, repassword.value);
    router.push("/");
    email.value = "";
    password.value = "";
  } catch (error) {
    console.log(error);
    if (error.error) {
      alertText.value = error.error
    } else if (error.errors[0].msg) {
      alertText.value = error.errors[0].msg
    } else {
      alertText.value = "An error ocurred, please try again later"
    }
  }
};
</script>

  
<style lang="scss">
@import "./RegisterView.scss";
</style>