import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MainLayout from "./components/layout/MainLayout";
import LoginLayout from "./components/layout/LoginLayout";
import EmptyLayout from "./components/layout/EmptyLayout";

import './assets/aside.css';

import 'font-awesome/css/font-awesome.css';

const ipcRenderer = require('electron').ipcRenderer;

Vue.use(ElementUI);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.prototype.$ipcRenderer = ipcRenderer; // 设置渲染进程
Vue.prototype._ = require('lodash');

Vue.component('main-layout', MainLayout);
Vue.component('login-layout', LoginLayout);
Vue.component('empty-layout', EmptyLayout);

/* eslint-disable no-new */
new Vue({
  components: {App},
  router,
  store,
  template: '<App/>'
}).$mount('#app');
