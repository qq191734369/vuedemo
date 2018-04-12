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
import MySelect from './components/commen/myselect.vue'
import MyNotice from './components/commen/notice.vue'
import ScrollTop from './components/commen/scrolltop.vue'
Vue.component('model',Model);
Vue.component('nav-route',NavRoute);
Vue.component('my-select',MySelect);
Vue.component('my-notice',MyNotice);
Vue.component('my-scroll',ScrollTop);

Vue.prototype.baseurl = 'ws://123.206.42.95';
Vue.prototype.baseurl2 = 'http://123.206.42.95';

//引入vuex状态管理
import store from './js/store'

store.dispatch('getUserInfoFromServer', Vue.prototype.baseurl2 + '/myproject/getUserInfo')

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log('登录状态：'+store.getters.getLogState)
  //等待周期数
  // let count = 0;
  // let isLogin = store.getters.getLogState;
  next()
  // if(isLogin){
  //   next()
  //   console.log('已登录，页面可以跳转')
  // }else{
  //   let timer = setInterval(function(){
  //     if(count >= 5) {
  //       clearInterval(timer)
  //       alert('获取用户信息失败，告辞！')
  //     }else{
  //       console.log(count)
  //       count++;
  //       isLogin = store.getters.getLogState;
  //       if(isLogin){
  //         next();
  //         clearInterval(timer)
  //       }
  //     }
  //   },1000)
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
