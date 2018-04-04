<template>
  <ol class="breadcrumb">
    <li v-for="(item,index) in path" :key="index" :class="{'active':index==path.length-1}"><a href="#" >{{item}}</a></li>
    <!-- <li class="active"></li> -->
  </ol>
</template>
<script>
export default {
  name: "nav-route",
  props:{
      path:{
          type:Array,
          default:[]
      }
  },
  data() {
    return {
      my: "zyl"
    };
  }
};
</script> 
<style scoped>

</style>
