<template>
  <div class="scroll-top" v-if="isShow" @click="handleScroll">
      <i class="iconfont icon-zhiding"></i>
  </div>
</template>
<script>
export default {
  data(){
      return{
          isShow:false
      }
  },
  created(){
      let self = this;
      //绑定window滚动事件
      $(window).bind('scroll', function(){
          let dheight = $(document).height(); 
          let scrollheight = $(document).scrollTop();
          let degree = Math.floor(scrollheight/dheight*100);
          if(degree >=10){
              self.isShow = true;
          }else{
              self.isShow = false
          }
      });
  },
  methods:{
      handleScroll(){
          $('html,body').animate({scrollTop: '0px'}, 200)
      }
  }
}
</script>
<style scoped>
.scroll-top{
    position: fixed;
    bottom: 10%;
    right: 5%;
    display: table;
    z-index: 999;
}
.scroll-top:hover{
    opacity: 0.6
}
.scroll-top .iconfont{
    font-size: 35px;
    color: rgb(40, 134, 228);
    opacity: 0.8;
}
</style>
