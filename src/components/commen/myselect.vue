<template>
  <div class="my-select" @click.stop="handleClick">
      <div class="my-selected">
          {{selectLabel}}
      </div>
      <div class="jiantou">
      </div>
      <div class="my-dropdown-list" v-show="showList">
          <ul>
              <li v-for="(item,index) in dataList" :key="index"  @click="handleSelect(item,index);" :value="item.value">{{item.label}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
import myevent from '../../js/event'
export default {
    props:{
        selectValue:{
            type:Number
        },
        dataList:'',
        width:{
            default:150,
            type: Number
        }
    },
    data(){
        return{
            showList:false,
            selectLabel:'请选择'
        }
    },
    methods:{
        handleClick(){
            this.showList = ~this.showList;
            console.log('点击选择框')
        },
        handleSelect(item,index){
            this.selectLabel = item.label;
            this.$emit(myevent.ON_DROWPDOWN_SELECT,item.value)
        },
    },
    mounted(){
        let self = this;
        document.addEventListener('click',function(e){
            if(self.showList) self.showList = false;
        })

        //计算当前选中的标签，并放入页面显示
        let selectitem = this.dataList.find((item)=>{
            return item.value == this.selectValue
        })
        if(selectitem != null){
            this.selectLabel = selectitem.label;
        }
        //设置宽度

    }
}
</script>
<style scoped>
.my-select{
    position: relative;
    display: table;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 18px;
    width: 180px;
    border-radius: 6px;
    border: 1px solid rgb(192, 192, 192);
    cursor: pointer;
}
.jiantou{
    height: 10px;
    width: 10px;
    transform: rotate(45deg) translateX(-100%);
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    position: absolute;
    top:50%;
    right: 12px;
}
.my-selected{
    display: inline-block;
}
.my-dropdown-list{
    display: table;
    position: absolute;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 8px 0 rgb(190, 190, 190);
    z-index: 999;
    top:34px;
    left: 0;
}
.my-dropdown-list li{
    list-style: none;
    cursor: pointer;
    padding: 6px 12px;
    min-width: 180px;
}
.my-dropdown-list li:first-child{
    border-radius: 6px 6px 0 0;
}
.my-dropdown-list li:last-child{
    border-radius: 0 0 6px 6px;
}
.my-dropdown-list li:hover{
    background-color: rgb(40, 134, 228);
    color: white;
}
.my-dropdown-list ul{
    padding: 0;
    margin: 0;
    width: 100%;
}
@media screen and (max-width:540px){
  .my-select{
    width:140px;
  }
  .my-dropdown-list li{
    list-style: none;
    cursor: pointer;
    padding: 6px 12px;
    min-width: 140px;
    }  
}
@media screen and (max-width:350px){
  .my-select{
    width:200px;
  }
  .my-dropdown-list li{
    list-style: none;
    cursor: pointer;
    padding: 6px 6px;
    min-width: 210px;
    }  
}
</style>
