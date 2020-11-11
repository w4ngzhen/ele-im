import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from "../view/login/LoginPage";
import PortalPage from "../view/portal/PortalPage";
import ChatPage from "../view/chat/ChatPage";
import AddressBookPage from "../view/address-book/AddressBookPage";
import ErrorPage from "../view/404/ErrorPage";

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
      component: PortalPage
    },
    {
      path: '/login',
      name: 'login-page',
      meta: {
        authRequired: false,
        layout: 'login-layout'
      },
      component: LoginPage
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    },
    {
      path: '/address-book',
      name: 'address-book',
      component: AddressBookPage
    },
    {
      path: '*',
      component: ErrorPage
    }
  ]
});
