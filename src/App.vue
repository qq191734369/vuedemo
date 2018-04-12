<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <!-- 窄屏幕下拉按钮 -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img alt="Brand" src="./assets/logo.png" class="nav-brand">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">首页</a></li>
            <li><a href="#">作者简介</a></li>
            <li><a href="#">关于</a></li>
          </ul>
          <div class="user-info-content">
            <div class="user-info">
              <span class="user-name">{{computeNickname}} , 你好</span>
              <button class="btn login-btn navbar-btn" @click="handleLoginShow">修改密码</button>
              <button class="btn login-btn navbar-btn" @click="handleLogout">注销</button>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-3">
          <!-- <div class="main-nav-fold"> -->
            <!-- <div class="main-nav-show">
              <button class="btn">菜单</button>
            </div> -->
            <ul class="nav nav-pills  nav-stacked main-nav" @click="HandelNavPillCilck($event)">
              <li role="presentation" :class="{'active':computeNavValue==0}" value="0" class="nav-item">个人中心</li>
              <li role="presentation" :class="{'active':computeNavValue==1}" value="1" class="nav-item">聊天室</li>
              <li role="presentation" :class="{'active':computeNavValue==2}" value="2" class="nav-item">消息中心</li>
            </ul>
          <!-- </div> -->
        </div>
        <div class="col-xs-12 col-sm-9 main-content">
          <nav-route :path = 'pagePath' ></nav-route>
          <div class="page-container">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
    <!-- 模态框 -->
    <model :isShow='logDialogShow' @close-dialog ="handleLoginHide" :isCloseable="true" :title="'修改密码'">
      <div slot="body-content">
         <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">原密码：</label>
            <div class="col-sm-10">
              <input type="password" 
                class="form-control" 
                id="inputEmail3" 
                placeholder="请输入旧密码" 
                v-model="form.password"
                v-validate="'required'"
                name = 'phone'
                :class="{'err-input':errors.has('phone')}">
              <div class="err-text" v-show="errors.has('phone')">{{errors.first('phone')}}</div>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">新密码：</label>
            <div class="col-sm-10">
              <input type="password" 
              class="form-control" 
              id="inputPassword3" 
              placeholder="请输入新密码" 
              v-model="form.newPassword"
              v-validate="'required'"
              name='password'
              :class="{'err-input':errors.has('password')}"
              >
              <div class="err-text" v-show="errors.has('password')">{{errors.first('password')}}</div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default" @click.prevent="handleSubmit">确定</button>
            </div>
          </div>
        </form>
      </div>
    </model>
    <my-scroll></my-scroll>
  </div>
</template>

<script>
import event from './js/event'
import {routerArr} from './router/router'
export default {
  name: 'App',
  data() {
    return {
      pagePath:['菜的抠脚','个人中心'],
      pagename:'个人中心',
      logDialogShow: false,
      username: 'qq191734369',
      form:{
        password:'',
        newPassword:''
      },
      page:0,
    }
  },
  created(){
    let isLogin = this.$store.getters.getLogState;
    console.log(isLogin)
    // this.$store.dispatch('getUserInfoFromServer',this.baseurl2 + '/myproject/getUserInfo')
    console.log(this.$store.getters.getUserInfo)
    //获取用户信息
    // $.ajax({
    //   type: 'get',
    //   url:this.baseurl2+ '/myproject/getUserInfo',
    //   dataType:'json',
    //   context:this,
    //   success:function(res){
    //     if(res != null){
    //       if(res.nickname == null){
    //         this.username = '匿名用户'
    //       }else{
    //         this.username = res.nickname;
    //       }
    //     }
    //   }
    // });
    //获取当前页面路径
  },
  methods:{
    HandelNavPillCilck(e){
      //根据nav的value改变右侧导航哪个亮，value从0开始
      let $target = $(e.target);
      let value = $target.val();
      if(value != undefined || value != null){
        this.$store.commit('changeNav',value)
        this.page = value;
        this.$router.push({name:routerArr[this.page]})
        if(value==0){
          this.pagePath = ['菜的抠脚','个人中心'];
        }else if(value == 1){
          this.pagePath = ['菜的抠脚','聊天室']
        }else if(value == 2){
          this.pagePath =['菜的抠脚','消息中心']
        }
      } 
    },
    handleLoginShow(){
      this.logDialogShow = true;
    },
    handleLoginHide(){
      this.logDialogShow = false;
    },
    handleSubmit(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          $.ajax({
              type:'post',
              url: this.baseurl2 + '/myproject/update',
              data:this.form,
              dataType:'json',
              success:function(res){
                console.log(res)
                if(res.status == 10000){
                  alert('修改成功')
                  this.logDialogShow = false;
                }else{
                  alert('密码错误')
                }
              }  
          })
          return;
        }
      });
    },
    handleLogout(){
      window.location.href = this.baseurl2 + '/myproject/logout'
    }
  },
  computed:{
    computeNavValue(){
      return this.$store.getters.getNavValue
    },
    computeNickname(){
      return this.$store.getters.getNickName
    }
  }
}
</script>

<style>
.nav-brand{
  width: 20px;
  height: 20px;
}
.main-nav{
  border-radius: 5px;
  box-shadow: 0 0  4px 1px rgb(224, 224, 224);
  overflow: hidden;
}
.login-btn{
  /* float: right; */
  display: table-cell;
  background-color: inherit;
}
.login-btn:focus,
.login-btn:active{
  outline: none;
}
.nav-item{
  height: 40px;
  padding:5px 15px;
  line-height: 30px;
  cursor: pointer;
}
.nav-item:hover{
  background-color: rgb(216, 216, 216);
}
.nav-item.active{
  background-color: rgb(40, 134, 228);
  color: white;
}
.user-info-content{
  float: right;
}
.user-info{
  display: table;
}
.user-name{
  display: table-cell;
}
.page-container{
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 4px 1px rgb(224, 224, 224);
}
.main-nav-fold{
  width:100%;
}
.main-nav-show{
  height: 40px;
  line-height: 40px;
  display: none;
}
.err-text{
  margin-top: 10px;
  padding-left: 10px;
  color: rgb(231, 80, 80);
}
@media screen and (max-width:768px) {
  .user-info-content{
    float: none;
  }
  .main-content{
    margin-top: 20px;
  }
  .main-nav-fold{
    height: 40px;
    overflow: hidden;
  }
  .main-nav-show{
    display: block;
    margin-bottom: 3px;
  }
}
</style>
