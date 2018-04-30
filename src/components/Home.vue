<template>
  <div> 
    <!-- <div class="safe-header">
      <div class="safe-score">
        <div>{{score}}</div>
        <div class="safe-text">安全评分</div>
      </div>
    </div> -->
    <div class="safe-body">
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          userID : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            {{userID}}
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          注册时间 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            {{registerDate}}
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          昵称 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <input type="text" class="my-input" v-model="form.nickname" >
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6  mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          性别 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item middle-select">
            <my-select :selectValue='form.gender'
             :dataList='genderList'
             v-on:on-drowpdown-selected="handleGenderSelect"></my-select>
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel"><i class="iconfont icon-coordinates" style="color:orange"></i>年龄 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <input type="text" class="my-input" v-model="form.age" >
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel"><i class="iconfont icon-emoji" style="color:red"></i>星座 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
            <div class="middle-item middle-select">
              <my-select :selectValue='form.constellation' 
              :dataList='starList'
              v-on:on-drowpdown-selected="handleStarSelect"></my-select>
            </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel"><i class="iconfont icon-lichengdixian" style="color:purple"></i>学校 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <input type="text" class="my-input" v-model="form.school" >
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          爱好 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <input type="text" class="my-input" v-model="form.hobby" >
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          省份 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <input type="text" class="my-input" v-model="form.province" >
          </div>
        </div>
      </div>
      <div class="row list-item">
        <div class="col-sm-6 col-xs-6 mylabel">
          <i class="iconfont icon-addressbook" style="color:green"></i>
          个性签名 : </div>
        <div class="col-sm-6 col-xs-6 middle-container">
          <div class="middle-item">
            <input type="text" class="my-input" v-model="form.signature" >
          </div>
        </div>
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
import myevent from '../js/event'
export default {
  name:'home',
  data(){
      return {
          my:'zyl',
          score:60,
          form:{
            nickname:'',
            gender:0,
            age:'',
            constellation:0,
            school:'',
            hobby:'',
            province:'',
            signature:''
          },
          userID:'emmmm',
          registerDate:'emmmm',
          genderList:[
            {
              value:0,
              label:'男'
            },
            {
              value:1,
              label:'女'
            }
          ],
          starList:[
            {
              value:0,
              label:' 白羊座'
            },
            {
              value:1,
              label:' 金牛座'
            },
            {
              value:2,
              label:' 双子座'
            },
            {
              value:3,
              label:' 双子座'
            },
            {
              value:4,
              label:' 巨蟹座'
            },
            {
              value:5,
              label:' 狮子座'
            },
            {
              value:6,
              label:'处女座'
            },
            {
              value:7,
              label:'天秤座 '
            },
            {
              value:8,
              label:'天蝎座 '
            },
            {
              value:9,
              label:' 射手座'
            },
            {
              value:10,
              label:'摩羯座 '
            },
            {
              value:11,
              label:'水瓶座 '
            },
            {
              value:12,
              label:' 双鱼座'
            },
          ]
      }
  },
  methods:{
    Save(){
      console.log(this.form)
      let self = this;
      $.ajax({
        type:'POST',
        url:this.baseurl2 + '/myproject/updateInfo',
        data:this.form,
        success:function(res){
          console.log(res.status);
          if(res != null){
            alert('保存成功')
            self.$store.dispatch('getUserInfoFromServer',self.baseurl2 + '/myproject/getUserInfo')
          }else{
            alert(`惊了`);
          }
        }
      })
    },
    handleGenderSelect(data){
      this.form.gender = data;
    },
    handleStarSelect(data){
      this.form.constellation = data;
    }
  },
  created(){
    //提交页面的value值,通知store页面变了
    this.$store.commit('changeNav',0)

    let self = this;
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
       } = this.$store.getters.getUserInfo;
    this.form.nickname = nickname;
    this.form.gender = parseInt(gender);
    this.form.age = age;
    this.form.constellation = constellation;
    this.form.school = school;
    this.form.hobby = hobby;
    this.form.province = province;
    this.form.signature = signature;
    this.registerDate = registerDate;
    this.userID = userId;
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
}
.middle-item{
  position: absolute; 
  top: 50%;
  transform: translateY(-50%);
  -ms-transform:translateY(-50%); 	/* IE 9 */
  -moz-transform:translateY(-50%);	/* Firefox */
  -webkit-transform:translateY(-50%); /* Safari 和 Chrome */
  -o-transform:translateY(-50%);	/* Opera */
}
.my-input{
  display: inline-block;
  box-sizing: border-box;
  height: 34px;
  line-height: 34px;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: rgb(241, 241, 241);
  border: 1px solid rgb(241, 241, 241);
}
.my-input:hover,
.my-input:focus{
  box-shadow: inset 0 1px 1px rgba(102,175,233,.06), 0 0 8px rgba(102,175,233,.6);
  border: 1px solid rgba(102,175,233);
}
.middle-select{
  z-index: 1;
}
@media screen and (max-width:540px){
  .list-item{
    margin: 0;
    padding: 0;
  }
  .my-input{
    width: 140px;
  }
}
@media screen and (max-width:350px){
  .list-item{
    height: 100px;
  }
  .mylabel{
    display: block;
    float: none;
    height: 40px;
    line-height: 40px;
  }
  .my-input{
    width: 210px;
  }
  .middle-container{
    display: block;
    float: none;
    height: 60px;
    line-height: 60px;
    width: 100%
  }
}
</style>
