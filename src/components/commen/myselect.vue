<template>
  <div class="my-select" @click.stop="handleClick">
      <div class="my-selected">
          {{selectLabel}}
      </div>
      <div class="my-dropdown-list" v-show="showList">
          <ul>
              <li v-for="(item,index) in dataList" :key="index"  @click="handleSelect(item,index)">{{item.label}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
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
        }
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
        this.selectLabel = selectitem.label;
    }
}
</script>
<style scoped>
.my-select{
    position: relative;
    display: table;
    height: 24px;
    padding: 5px 8px;
    font-size: 14px;
    line-height: 14px;
    width: 150px;
    border-radius: 6px;
    border: 1px solid rgb(192, 192, 192);
    cursor: pointer;
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
    top:26px;
    left: 0;
}
.my-dropdown-list li{
    list-style: none;
    cursor: pointer;
    padding: 5px;
    min-width: 150px;
}
.my-dropdown-list li:hover{
    background-color: rgb(40, 134, 228);
    color: white;
}
.my-dropdown-list ul{
    padding: 0;
    margin: 0;
}
</style>
