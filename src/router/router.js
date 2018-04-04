import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import Chat from '../components/pages/chat.vue'
import MessageCenter from '../components/pages/message.vue'

Vue.use(Router)

const routerArr = ['home','chat','messagecenter'];
export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/chat',
      name:'chat',
      component: Chat
    },
    {
      path:'/messagecenter',
      name:'messagecenter',
      component: MessageCenter
    }
  ]
})

export {routerArr}
