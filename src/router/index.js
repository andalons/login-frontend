import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes";
import { useUserStore } from "../stores/userStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-link-active',
  scrollBehavior: (to, from, savedPosition) => { 
    if (savedPosition) {
      return savedPosition
    } 
    else { return {left:0, top: 0}}},
  routes,
})

router.beforeEach(async (to, from, next) => {
  const requiredAuth = to.meta.auth;
  const userStore = useUserStore();

  // if there is token in memory
  if (userStore.token) {
    return next();
  }

  if (requiredAuth || sessionStorage.getItem("user")) {
    await userStore.refreshToken();
    if (userStore.token) {
      return next();
    }
    return next("/login");
  }
  return next();

});


export default router
