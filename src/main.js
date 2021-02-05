import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DlButton from './js/components/basic/buttons/Button.vue'
Vue.component('dl-button', DlButton)

import App from './js/views/layout/Index'
import Dashboard from './js/views/pages/dashboard/View'

Vue.config.productionTip = false

const router = new VueRouter({
  base: '/',
  mode: 'history',
  linkExactActiveClass: 'link-exact-active',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  }]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
