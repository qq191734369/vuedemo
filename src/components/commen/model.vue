<template>
<div class="modal">
    <div class="modal-mask" @click="handleCloseMask" v-show="isShow"></div>   
    <transition name="fade">
        <div class="mymodel-dialog" v-if="isShow">
            <div class="mydialog-header clear-fix">
                <div class="dialog-header-item">
                    <h4>{{title}}</h4> 
                </div>
                <!-- <div class="dialog-header-item"> -->
                <button @click="handleCloseBtn" class="close-btn">x</button>
                <!-- </div> -->
            </div>
            <div class="mydialog-body">
                <slot name = "body-content">body</slot>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
/***************************
 * 模态框组件
 * @param isShow 控制组件显示，由父组件传入
 * @param isCloseable 是否可以点击mask关闭模态框
 * @param title 标题
 * *******************************/ 
import event from '../../js/event';
export default {
    name:'Model',
    props:{
        isShow:{
            type:Boolean,
            default:false
        },
        isCloseable:{
            type:Boolean,
            default:true
        },
        title:{
            default:'标题'
        }
    },
    data(){
        return{

        }
    },
    methods:{
        handleCloseBtn(){
            this.$emit(event.CLOSE_DIALOG)
        },
        handleCloseMask(){
            if(this.isCloseable){
                this.$emit(event.CLOSE_DIALOG)
            }
            else{
                return;
            }
        }
    }
}
</script>
<style scoped>
.modal{
    position: fixed;
    width:0;
    height: 0;
    display: block;
    bottom: 0;
}
.modal-mask{
    width:100%;
    height: 100%;
    background-color: black;
    opacity: .35;
    position: fixed;
    width:100%;
    height: 100%;
}
.show{
    display: block;
}
.mymodel-dialog{
    position: fixed;
    top:12%;
    left: 0;
    right: 0;
    max-width: 600px;
    width: 80%;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 4px 1px grey; 
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
}
.mydialog-header{
    min-height: 30px;
    display: table;
    width: 100%;
    border-bottom: 1px grey;
    padding:0 15px;
    font-weight: 600;
}
.mydialog-body{
    width: 100%;
    padding:15px;
}
.close-btn{
    border:none;
    background-color: inherit;
    /* float: right; */
    width: 20px;
    height: 20px;
    padding: 0;
    line-height: 20px;
    position: absolute;
    font-size: 20px;
    font-weight: 400;
    color: grey;
    right:15px;
}
.dialog-header-item{
    display: table-cell;
    vertical-align: middle;
}
.fade-enter-to, .fade-leave {
  transition: all .5s;
  -moz-transition:all .5s; /* Firefox 4 */
  -webkit-transition: all .5s; /* Safari 和 Chrome */
  -o-transition: all .5s; /* Opera */
  transform: translateY(0);
  -ms-transform:translateY(0); 	/* IE 9 */
  -moz-transform:translateY(0); 	/* Firefox */
  -webkit-transform:translateY(0); /* Safari 和 Chrome */
  -o-transform:translateY(0); 	/* Opera */
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-500px);
  -ms-transform:translateY(-500px); 	/* IE 9 */
  -moz-transform:translateY(-500px); 	/* Firefox */
  -webkit-transform:translateY(-500px); /* Safari 和 Chrome */
  -o-transform:translateY(-500px); 	/* Opera */
  transition: all .5s;
  -moz-transition:all .5s; /* Firefox 4 */
  -webkit-transition: all .5s; /* Safari 和 Chrome */
  -o-transition: all .5s; /* Opera */
}
</style>

