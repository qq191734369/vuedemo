// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import $ from 'jquery'
// 引入全局css
import './assets/global.css'
Vue.config.productionTip = false;
//引入bootstrap.js
import '../node_modules/bootstrap/dist/js/bootstrap.js'
//引入图标字体
import '../static/iconfont/iconfont.css'
//引入表单校验
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate)

//引入公共组件
import Model from './components/commen/model.vue'
import NavRoute from './components/commen/NavRoute.vue'
Vue.component('model',Model);
Vue.component('nav-route',NavRoute);

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from)
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
