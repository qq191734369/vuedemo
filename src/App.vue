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
              <span class="user-name">{{username}} , 你好</span>
              <button class="btn login-btn navbar-btn" @click="handleLoginShow">登录</button>
              <button class="btn login-btn navbar-btn" @click="handleLoginShow">注销</button>
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
              <li role="presentation" :class="{'active':page==0}" value="0" class="nav-item">个人中心</li>
              <li role="presentation" :class="{'active':page==1}" value="1" class="nav-item">聊天室</li>
              <li role="presentation" :class="{'active':page==2}" value="2" class="nav-item">消息中心</li>
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
    <model :isShow='logDialogShow' @close-dialog ="handleLoginHide" :isCloseable="true">
      <div slot="body-content">
         <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">账号</label>
            <div class="col-sm-10">
              <input type="email" 
                class="form-control" 
                id="inputEmail3" 
                placeholder="Email" 
                v-model="form.phoneNumber"
                v-validate="'required'"
                name = 'phone'
                :class="{'err-input':errors.has('phone')}">
              <div class="err-text" v-show="errors.has('phone')">{{errors.first('phone')}}</div>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
              <input type="password" 
              class="form-control" 
              id="inputPassword3" 
              placeholder="Password" 
              v-model="form.password"
              v-validate="'required'"
              name='password'
              :class="{'err-input':errors.has('password')}"
              >
              <div class="err-text" v-show="errors.has('password')">{{errors.first('password')}}</div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox">记住我
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default" @click.prevent="handleSubmit">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </model>
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
        phoneNumber:'',
        password:''
      },
      page:0
    }
  },
  created(){

  },
  methods:{
    HandelNavPillCilck(e){
      let $target = $(e.target);
      let value = $target.val();
      if(value != undefined || value != null){
        this.page = value;
        this.$router.push({name:routerArr[this.page]})
      } 
    },
    handleLoginShow(){
      this.logDialogShow = true;
    },
    handleLoginHide(){
      this.logDialogShow = false;
    },
    handleSubmit(){
      console.log('6666')
      this.$validator.validateAll().then((result) => {
        if (result) {
          $.ajax({
            type: 'POST',
            url:'http://10.108.144.60:8080/myproject/register',
            data: this.form,
            success:function(res){
              if(res.status == 100){
                console.log(res.message);
              }
            }
          })
          this.logDialogShow = false;
          return;
        }
      });
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
