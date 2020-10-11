import Vue from 'vue';
import Router from 'vue-router';
import Login from "../view/login/Login";
import Main from "../view/main/Main";
import Portal from "../view/portal/Portal";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      meta: {
        authRequired: false,
        layout: 'empty-layout'
      },
      component: Portal
    },
    {
      path: '/login',
      name: 'login-page',
      meta: {
        authRequired: false,
        layout: 'login-layout'
      },
      component: Login
    },
    {
      path: '/main',
      name: 'main-page',
      component: Main
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
