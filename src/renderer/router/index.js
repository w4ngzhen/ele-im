import Vue from 'vue';
import Router from 'vue-router';
import Login from "../view/login/Login";
import Portal from "../view/portal/Portal";
import Chat from "../view/chat/Chat";
import AddressBook from "../view/address-book/AddressBook";
import Settings from "../view/settings/Settings";

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
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/address-book',
      name: 'address-book',
      component: AddressBook
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
