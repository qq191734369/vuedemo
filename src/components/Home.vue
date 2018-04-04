<template>
  <div> 
    <div class="safe-header">
      <div class="safe-score">
        <div>{{score}}</div>
        <div class="safe-text">安全评分</div>
      </div>
    </div>
    <div class="safe-body">
      <div class="row list-item">
        <div class="col-sm-4">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          昵称 : </div>
        <div class="col-sm-5">{{username}}</div>
        <div class="col-sm-3"><a href="#">修改</a></div>
      </div>
      <div class="row list-item">
        <div class="col-sm-4"><i class="iconfont icon-coordinates" style="color:orange"></i>绑定邮箱 : </div>
        <div class="col-sm-5">{{email}}</div>
        <div class="col-sm-3"><a href="#">绑定</a></div>
      </div>
      <div class="row list-item">
        <div class="col-sm-4"><i class="iconfont icon-emoji" style="color:red"></i>绑定手机 : </div>
        <div class="col-sm-5">{{phone}}</div>
        <div class="col-sm-3"><a href="#">绑定</a></div>
      </div>
      <div class="row list-item">
        <div class="col-sm-4"><i class="iconfont icon-lichengdixian" style="color:purple"></i>菜鸡等级 : </div>
        <div class="col-sm-5"><span class="level">{{lv}}</span></div>
        <div class="col-sm-3"><a href="#">绑定</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'home',
  data(){
      return {
          my:'zyl',
          score:60,
          username:'qq191919191',
          email:'191712@qq.com',
          phone:'18811395605',
          lv:'6'
      }
  }
}
</script>
<style scoped>
.safe-img{
  display: block;
  margin: 0 auto;
}
.safe-header{
  position: relative;
  background: url(../assets/img/logo_normal.png) no-repeat;
  width: 400px;
  height: 220px;
  margin: 0  auto 50px;
}
.safe-score{
  text-align: center;
  font-size: 60px;
  line-height: 60px;
  color: white;
  font-weight: 700;
  height: 60px;
  position: relative;
  top:60px;
}
.safe-score .safe-text{
  font-size: 14px;
  line-height: 14px;
  color: white;
  font-weight: normal;
  padding: 10px 0;
}
.safe-body{
  color: grey;
}
.list-item{
  padding: 0 15px;
  margin: 0 15px;
  height: 80px;
  line-height: 80px;
  border-top: 1px solid rgb(231, 230, 230); 
}
.iconfont{
  font-size: 20px;
  margin-right: 8px;
  vertical-align: -2px;
}
.level{
  font-size: 20px;
  font-weight: 600;
}
</style>
