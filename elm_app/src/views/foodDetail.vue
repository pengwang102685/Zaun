<template>
    <div class="foodDetail">
        <elmhead>
            <template v-slot:left><router-link to="/"><i class="iconfont">&lt;</i></router-link></template>
            <template v-slot:center>我问问</template>
        </elmhead>
        <div class="imgbox">
            <img src="" alt="">
        </div>
        <div class="con">
            <p>hh</p>
            <ul>
                <li>我问问</li>
                <li>
                    <span>评分</span>
                    <span class="span">
                        <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                    </span>
                </li>
                <li>月售 404单 <span>售价 ￥20 元起</span></li>
                <li>评论数 104 好评率 85%</li>
            </ul>
        </div>
    </div>
</template>

<script>
import elmhead from '../components/head'
    export default {
        name:'foodDetail',
        components:{
            elmhead
        },
        data(){
            return{
                value: 3.7
            }
        }

    }
</script>
<style>
    .span>div>span>i{
    margin-right: 0;
}
</style>
<style scoped>
.foodDetail{
    background: #fff;
    min-height: 11.3rem;
    padding-top: 1rem;
}
.imgbox{
    width: 6.4rem;
    height: 6.4rem;
}
.imgbox img{
    width: 100%;
    height: 100%;
}
.con p{
    font-size: 0.26rem;
    color: #666;
    margin-top: 0.1rem;
    line-height: 0.4rem;
    bottom: .1rem;
    padding: 0 .2rem;
    margin-bottom: .1rem;
}
.con ul{
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}
.con ul li{
    margin-bottom: .1rem;
    font-size: .26rem;
    color: #666;
    margin-right: .2rem;
    padding: 0 .2rem;
    overflow: hidden;
}
.con ul li:nth-of-type(1){
    padding: 0 .2rem;
    font-size: 0.3rem;
}
.con ul li:nth-of-type(2) span{
    float: left;
}
.con ul li:nth-of-type(2) span:first-of-type{
    font-size: .24rem;
    color: #666;
}
.con ul li:nth-of-type(2) span:last-of-type{
    font-size: .26rem;
    color: #f60;
}
.con ul li:nth-of-type(3) span{
    font-size: .28rem;
    color: #f60;
}

</style>
