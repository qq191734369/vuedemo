<template>
  <div v-if="isShow" class="my-notice">
      {{msg}}
  </div>
</template>
<script>
export default {
  props:{
      msg:{
          type:String,
          default:'通知消息'
      }
  },
  data(){
      return{
          isShow:false
      }
  }
}
</script>
<style scoped>
.my-notice{
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}
</style>

