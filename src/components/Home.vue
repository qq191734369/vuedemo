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
        <div class="col-sm-6 col-xs-6">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          昵称 : </div>
        <div class="col-sm-6 col-xs-6">{{form.nickname}}</div>
        <!-- <div class="col-sm-3"><a href="#">修改</a></div> -->
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          性别 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <my-select :selectValue='form.gender' :dataList='genderList'></my-select>
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6"><i class="iconfont icon-coordinates" style="color:orange"></i>年龄 : </div>
        <div class="col-sm-6 col-xs-6">{{form.age}}</div>
        <!-- <div class="col-sm-3"><a href="#">绑定</a></div> -->
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6"><i class="iconfont icon-emoji" style="color:red"></i>星座 : </div>
        <div class="col-sm-6 col-xs-6">{{form.constellation}}</div>
        <!-- <div class="col-sm-3"><a href="#">绑定</a></div> -->
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6"><i class="iconfont icon-lichengdixian" style="color:purple"></i>学校 : </div>
        <div class="col-sm-6 col-xs-6">{{form.school}}</div>
        <!-- <div class="col-sm-3"><a href="#">绑定</a></div> -->
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          爱好 : </div>
        <div class="col-sm-6 col-xs-6">{{form.hobby}}</div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          省份 : </div>
        <div class="col-sm-6 col-xs-6">{{form.province}}</div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          个性签名 : </div>
        <div class="col-sm-6 col-xs-6">{{form.signnture}}</div>
      </div>
    </div>
    <div class="safe-footer">
      <div class="btn-group">
        <button class="btn save-btn" @click="Save">保存</button>
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
          form:{
            nickname:'惊了',
            gender:1,
            age:'16',
            constellation:'水平',
            school:'学校',
            hobby:'爱好',
            province:'辽宁',
            signnture:'我tm射爆'
          },
          genderList:[
            {
              value:1,
              label:'男'
            },
            {
              value:2,
              label:'女'
            }
          ]
      }
  },
  methods:{
    Save(){
      alert('妈耶')
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
  padding-top: 30px;
  box-sizing: content-box;
  background-origin: content-box;
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
  position: relative;
}
.list-item:last-child{
  /* border-bottom: 1px solid rgb(231, 230, 230);  */
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
.safe-footer{
  padding:15px;
  margin-bottom: 50px;
  text-align: center;
}
.save-btn{
  margin: auto;
  float: none;
  background-color: rgb(40, 134, 228);
  color: white;
}
.save-btn:hover{
  opacity: .8;
}
.middle-container{
  height: 100%;
  position: relative;
  z-index: 1;
}
.middle-item{
  position: absolute; 
  top: 50%;
  transform: translateY(-50%);
}
</style>
