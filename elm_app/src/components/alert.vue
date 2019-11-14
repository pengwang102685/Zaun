<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title"></div>
            <div class="content" v-html="content">{{title}}</div>
            <div class="btns">
                <div v-if="cancelText != ''" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="dangerText!=''" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
                <div v-if="confirmText != ''" class="confirm-btn" @click="confirmBtn">
                    {{confirmText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
        </div> 
    </div>
</template>
<script>
export default {
    props: {
        value: {},
        // 类型包括 defalut 默认， danger 危险， confirm 确认，
        type:{
            type: String,
            default: 'default'
        },
        content: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        cancelText: {
            type: String,
            default: ''
        },
        dangerText: {
            type: String,
            default: ''
        },
        confirmText: {
            type: String,
            default: ''
        },
    },

    data(){
        return{
            showMask: false,
        }
    },
    methods:{
        closeMask(){
             this.showMask = false;
        },
        closeBtn(){
            this.$emit('cancel');
            this.closeMask();
        },
        dangerBtn(){
            this.$emit('danger');
            this.closeMask();
        },
        confirmBtn(){
            this.$emit('confirm');
            this.closeMask();
        }

    },

    mounted(){
        this.showMask = this.value;
    },
    watch:{
        value(newVal, oldVal){
            this.showMask = newVal;
        },
        showMask(val) {
            this.$emit('input', val);
        }
    },
}
</script>
<style scoped>
.dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;       
}
.dialog-container{
    width: 5rem;
    height: 4rem;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.08rem;
    position: relative;
}
.dialog-title{
    width: 100%;
    height: 0.6rem;
    font-size: 0.4rem;
    color: #696969;
    font-weight: 600;
    padding: 0.2rem 0.5rem 0 0.2rem;
    box-sizing: border-box;
}

.content{
    color: #797979;
    line-height: 0.8rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
}
.inp{
    margin: 0.1rem 0 0 0.2rem;
    width: 2rem;
    height: 0.4rem;
    padding-left: 0.04rem;
    border-radius: 0.04rem;
    border: none;
    background: #efefef;
    outline: none;            
}
.inp:focus{
        border: 0.01rem solid #509EE3;
    }
.btns{
    width: 100%;
    height: 0.8rem;
    position: absolute;
    bottom: 0.4rem;
    left: 0;
    text-align: center;
    padding: 0 0.2rem;
    box-sizing: border-box;   
    background: #fff;      
}
.btns > div{
    display: inline-block;
    line-height: 0.4rem;
    padding: 0.1rem 0.4rem;
    color: #ffffff;
    background: #f1f1f1;
    border-radius: 0.08rem;
    margin-right: 0.12rem;
    cursor: pointer;
    font-size: 0.2rem;
}
.btns .default-btn{
    color: #787878;
}
.btns .default-btn:hover{
        color: #509EE3; 
    }
.btns .danger-btn{
    background: #dd6b55;                  
}
.btns .danger-btn:hover{
    background: rgb(224, 135, 135);
}
.btns .danger-btn:active{
    background: #EF8C8C;
}
.btns .confirm-btn{
    color: #ccc;
    background: #509EE3;                 
}
.btns .confirm-btn:hover{
            background: #6FB0EB;
        }
.btns .close-btn{
    position: absolute;
    top: 0.16rem;
    right: 0.16rem;
    width: 0.3rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    font-size: 0.2rem;
    cursor: pointer;            
}
.btns .close-btn:hover{
    font-weight: 600;
}
</style>