<template>
    <div class="row">
      <div class="ccol-xs-12 col-sm-9 ">
        <div class="chat-room">
          <div class="message-window" v-for="(item,index) in messageList" :key="index">
            <div class="message-item">
              <div class="left-msg">
                <div class="msg-content">
                  <img src="http://placehold.it/50x50" alt="" class="avatar">
                  <div class="user-info">
                    <div class="username">
                      <span class="name">{{item.name}}</span>
                      <span class="time">{{item.time}}</span>
                    </div>
                    <div class="msg" :class="{'my-message': item.from == 1}">
                      {{item.msg}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="请输入,按回车发送" name='message' v-validate="'required'" :class="{'err-input': errors.has('message')}" v-model="message" v-on:keydown.13="SendMessage">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" @click="SendMessage">发送</button>
            </span>
          </div><!-- /input-group -->
        </div>
      </div>
      <div class="col-xs-12 col-sm-3 user-list-container">
        <div class="user-list">
          <h4><span class="glyphicon glyphicon-align-justify"></span> 用户列表</h4>
          <div class="list-item" v-for="(item,index) in userList" :key="index">
            <div class="list-item-1"><img src="http://placehold.it/20x20" alt="" class="avartar-small"></div>
            <span class="list-item-1">
              {{item.name}}
            </span>
          </div>
        </div> 
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message:'',
      msg: '聊天室',
      messageList:[
        {
          name:'赵日天',
          msg:'我tm射爆大文件大胜靠德几千万【 驱蚊器翁群翁群翁群二群翁群二群翁群翁群翁群翁群翁群二群翁',
          time:new Date().toLocaleString(),
          from:2
        },
        {
          name:'叶良辰',
          msg:'螺旋爆炸',
          time:new Date().toLocaleString(),
          from:2
        },
      ],
      userList:[
        {
          name:'赵日天'
        },
        {
          name:'叶良辰'
        }
      ]
    }
  },
  methods:{
    SendMessage(){
      this.$validator.validateAll({
        message: this.message
      }).then((result) => {
        if (result) {
          this.messageList.push({
            name:'匿名用户',
            msg:this.message,
            time:new Date().toLocaleString(),
            from:1
          });
          this.message = '';
          return;
        }
        console.log('Oops!');
      });
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.chat-room{
  height: 500px;
  border: white 5px solid;
  padding: 15px;
  position: relative;
  overflow: auto;
  background-color: rgb(243, 243, 243);
}
.user-list{
  height: auto;
  max-height: 600px;
  padding: 15px;
  box-shadow: 0 0 4px 1px rgb(224, 224, 224);
}
.message-item{
  height: 60px;
  display: table;
}
.msg-content{
  display: table-cell;
  vertical-align: middle;
}
.left-msg{
  float: left;
}
.avatar{
  display: block;
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.username{
  height: 16px;
  line-height: 16px;
  display: block;
  color: grey;
}
.name, .time{
  display: inline-block;
  padding: auto 10px;
  padding: 0 10px;
}
.user-info{
  float: left;
}
.msg{
  font-size: 16px;
  padding:15px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  position: relative;
  max-width: 350px;
  display: table;
  word-break: break-all;
}
.msg::after{
  display: block;
  position: absolute;
  content: '';
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  background-color: white;
  top:5px;
  left:-6px;
}
.msg.my-message{
  background-color: rgb(27, 223, 27);
  color: white;
}
.msg.my-message::after{
  background-color: rgb(27, 223, 27);
}
.message-window{
  margin-bottom: 20px;
}
.input-container{
  padding:15px;
}

.list-item{
  width: 100%;
  overflow: hidden;
  display: table;
}
.avartar-small{
  display: inline-block;
  height: 20px;
  width: 20px;
}
.list-item-1{
  display: table-cell;
  vertical-align: middle;
}
.list-item-1 + .list-item-1{
  max-width:100px;
  padding-left: 10px;
  word-break:keep-all; 
  text-overflow:ellipsis;
  overflow: hidden;
}
</style>
