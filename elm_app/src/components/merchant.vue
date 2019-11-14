<template>
    <div class="list" @click="mulit">
        <div class="img fl">
            <slot name='left'>
                <div>
                   <img src="" alt="">
                </div>
            </slot>
        </div>
        <div class="con fl">
            <slot name='center'>
                <div class="top">
                    <span class="pinpai">
                        <slot name="pinpai">品牌</slot>
                    </span>
                    <span class="oName">
                        <slot name="oName">效果演示</slot>
                    </span>
                </div>
                <div class="center">
                    <span class="star">
                        <slot name="star">11111</slot>
                    </span>
                    <span class="num1">
                        <slot name="num1">5.0</slot>
                    </span>
                    <span class="sell">
                        <slot name="sell">月售111单</slot>
                    </span>
                </div>
                <div class="bottom">
                    <span class="send">
                        <slot name="send">￥20起送</slot> /
                    </span>
                    <span class="fee">
                        <slot name="fee">配送费越￥2</slot>
                    </span>
                </div>

            </slot>
        </div>
        <div class="num fr">
            <slot name='right'>
                <div class="plan1">
                    <div class="planbox">
                        <span class="plan">
                            <slot name="plan">保准票</slot>
                        </span>
                    </div>
                </div>

                <div class="give">
                    <div class="givebox">
                        <span class="feng">
                            <slot name="feng">蜂鸟专送</slot>
                        </span>
                        <span class="zhun">
                            <slot name="zhun">准时答</slot>
                        </span>
                    </div>
                </div>
                <div class="time">
                    <div class="timebox">
                        <span class="km">
                            <slot name="km">10公里</slot> /
                        </span>
                        <span class="minute">
                            <slot name="minute">20分钟</slot>
                        </span>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>


<script>
export default {
    methods:{
        mulit(){
          this.$emit('int')
        }
    }
}
</script>


<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .give{
        width: 100%;
        float: left;
        margin-bottom: 0.15rem;
        font-size: 0.16rem;
    }
    .givebox{
        float: right;
        margin-top: 0.1rem;
    }
    .time{
        width: 2.1rem;
        float: left;
        margin-left: -0.1rem;
    }
    .timebox{
        width: 2.4rem;
        float: right;
    }
    .num span{
        float: left;
    }
    .minute{
        color: #3190e8;
        font-size: .1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .km{
        font-size: .1rem;
        color: #666;
    }
    .zhun{
        padding: 0.01rem .05rem;
        border:1px solid #3190e8;
        color: #3190e8;
        font-size: 0.03rem;
        border-radius: 0.05rem;
    }
    .feng{
        padding: 0.02rem .1rem;
        background-color: #3190e8;
        color: white;
        font-size: 0.03rem;
        border-radius: 0.05rem;
        margin-right: 0.05rem;
    }
    .plan1{
        overflow: hidden;
        margin-bottom: 0.15rem;
    }
    .plan{
        font-size: .1rem;
        color: rgb(122, 117, 117);
        display: inline-block;
        float: left;
        border: 1px solid #ccc;
    }
    .planbox{
        float: right;
    }
    .top{
        width: 100%;
        overflow: hidden;
        margin-bottom: 0.15rem;
    }
    .center{
          width: 100%;
          overflow: hidden;
          clear: both;
          margin-bottom: 0.15rem;
    }
    .bottom{
         width: 100%;
         clear: both;
         overflow: hidden;
    }
    .fee{
         font-size: .2rem;
        color: #666;

    }
    .send{
         font-size: .2rem;
        color: #666;
    }
    .sell{
        font-size: .1rem;
        color: #666;
        margin-top: 0.1rem;
    }
    .num1{
        font-size: .1rem;
        color: #ff6000;
        margin-right: .05rem;
    }
    .star{
        font-size: .1rem;
         margin-right: .05rem;
    }
    .list{
        width: 6.4rem;
        height: 2.2rem;
        background: #fff;
        border-bottom:1px solid #eee;
        padding: .5rem .2rem;
        box-sizing: border-box;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .img{
        width: 1rem;
        height: 1rem;
        margin-right: .2rem;
    }
    .img img{
        width: 1rem;
        height: 1rem;
    }
    .con{
        width: 2.7rem;
        height: 1.2rem;
        white-space: nowrap; /* 1.强制在同一行内显示所有文本，直到文本结束或者遭遇br标签才换行 （一般不会使用 br 标签）*/
       overflow: hidden; /* 2.超出的部分 隐藏 */
       text-overflow: ellipsis; /*3. 溢出的部分用省略号替代 */

    }
    .con span{
        float: left;
    }
    .num{
        width: 2rem;
        height: 1.2rem;
        text-align: right;
    }

    .pinpai{
        padding: 0.02rem 0.1rem;
        font-size: .12rem;
        background-color: #ffd930;
        border-radius: .05rem;
        margin-right: 0.1rem;
    }
    .oName{
        width: 2rem;
        color: #333;
        padding-top: .01rem;
        font: .26rem/.26rem PingFangSC-Regular;
        font-weight: 700;
        font-size: .1rem;
        white-space: nowrap; /* 1.强制在同一行内显示所有文本，直到文本结束或者遭遇br标签才换行 （一般不会使用 br 标签）*/
        overflow: hidden; /* 2.超出的部分 隐藏 */
        text-overflow: ellipsis; /*3. 溢出的部分用省略号替代 */
        font-size: 0.24rem;
  }

</style>
