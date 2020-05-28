import 'vx-easyui/dist/themes/material-blue/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';

import 'babel-polyfill'

import EasyUI from 'vx-easyui';
import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'

Vue.use(EasyUI)

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router
})
