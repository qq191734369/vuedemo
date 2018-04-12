import Vuex from 'vuex'
import Vue from 'vue'
import bus from './eventbus'
import myevent from './event'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        isLogin: false,
        userName:'',
        navValue:0,
        userInfo:{
            nickname:'未设置',
            gender:1,
            age:'未登录',
            constellation:0,
            school:'未登录',
            hobby:'未登录',
            province:'未登录',
            signature:'未登录',
            registerDate:new Date().toLocaleString(),
            userId:(Math.random()*1000).toFixed(0),
        },
    },
    getters:{
        getLogState:(state) => {
            return state.isLogin;
        },
        getNavValue:(state)=>{
            return state.navValue;
        },
        getUserInfo:(state)=>{
            return state.userInfo;
        },
        getNickName:(state)=>{
            return state.userInfo.nickname;
        }
    },
    mutations:{
        logout:(state)=>{
            state.isLogin = false;
        },
        login:(state)=>{
            state.isLogin = true;
        },
        changeNav:(state,value)=>{
            state.navValue = value;
        },
        updateUserInfo:(state,userinfo)=>{
            //es6对象的解构
            let {
                nickname,
                gender,
                age,
                constellation,
                school,
                hobby,
                province,
                signature,
                registerDate,
                userId
             } = userinfo;
             //赋值给status中的userInfo
            state.userInfo = {
                nickname,
                gender,
                age,
                constellation,
                school,
                hobby,
                province,
                signature,
                registerDate,
                userId
            };
        },
    },
    actions:{
        getUserInfoFromServer:({commit,getters},url)=>{
            $.ajax({
                type:'get',
                url:url,
                dataType:'json',
                async:false,
                timeout:3000,
                success:function(res){
                  console.log(res)
                  if(res != null){
                    console.log(res)
                    commit('updateUserInfo',res);
                    commit('login');
                  }else{
                    alert('获取用户信息炸裂了');
                  }
                },
                error:function(xhr,err){
                    alert('获取用户信息炸裂\n'+'错误信息：'+err+',错误码:'+xhr.status);
                }   
            })
        }
    }
})

export default store