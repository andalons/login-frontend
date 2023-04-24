import LoginView from '../views/login-view/LoginView.vue'
import RegisterView from '../views/register-view/RegisterView.vue'
import HomeView from '../views/home-view/HomeView.vue'
import ProfileView from '../views/profile-view/ProfileView.vue'
import NotFoundView from '../views/not-found-view/NotFoundView.vue'

const routes = [
    {
        path: '/',
        redirect: '/login',
        children:[
            {
                path: "/",
                component: HomeView,
                meta: {
                  auth: true,
                },
            },
        ]
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView
      },
      {
        path: "/profile",
        component: ProfileView,
        meta: {
          auth: true,
        },
    },
      {
        path: "/404",
        name: 'not-found',
        component: NotFoundView
      },
      {
        path: "/:catchAll(.*)*",
        name: 'not-found',
        component: NotFoundView
      },
];

export default routes;