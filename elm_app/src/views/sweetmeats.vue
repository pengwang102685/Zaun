<template>
	<div>
        <transition name="fade">
            <loading v-if="isLoading"></loading>
        </transition>
		<elmHead>
            <template v-slot:left><router-link :to='{path:"/about/Takeaway", query: {geohash: geohash}}'>&lt;</router-link></template>
            <template v-slot:center>{{$store.state.order.selectshop}}</template>
            <template v-slot:right></template>
		</elmHead>

        <div class="content">
            <ul class="lists" @click="isOp">
                <li>
                    <div>
                        <span @click="clk1">{{$store.state.order.selectshop}}</span> 
                        <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon>
                        </svg>
                    </div>
                    
                </li>
                <li>
                    <div>
                        <span @click="clk2">排序</span>
                        <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon>
                        </svg>
                    </div>
                    
                </li>
                <li>
                    <div>
                        <span @click="clk3">筛选</span>
                        <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon>
                        </svg>
                    </div>
                    
                </li>
            </ul>
            <div class="oitem" style="position:absolute;z-index:9;">
                <div style="display: block;" class="fenlei" v-if="point==1">
                    <ul style="background:#f5f5f5">
                        <!-- <i>异国料理</i><span class="yiguo">2262</span> -->
                        <li v-for="(item,index) in olist" @click="tab(index)" :key="index" :style="{'background':index==idx?'#fff':'#f5f5f5'}">     
                            <i style="text-style:none;margin-right:0.1rem">
                                <img :src="'https://fuss10.elemecdn.com/'+item.image_url+'.'+item.image_url.slice(32)" style="width:0.2rem;height:0.2rem;float:left;margin-top:0.15rem">
                                {{item.name}}
                            </i>
                            <span class="numbox"><span class="num">{{item.count}}</span><span class="icon">></span></span>
                        </li>
                    </ul>
                    <p>  
                        <span v-for="(i,index) in kuaican" :key="index" @click="classify_n(index,i)">
                            {{i.name}}
                            <i>{{i.count}}</i>
                        </span>

                    </p>
                </div>
                <!-- 排序 -->
                <div class="paixu" v-if="point==2" style="display:block">
                    <ul>
                        <li v-for="(item,index) in paixu" @click="paixu1(index)" :key="index">
                            <i :class="'iconfont '+item.icon"></i>
                            {{item.name}}
                        </li>
                    </ul>
                </div>
                <!-- 配送方式 -->
                <div class="shaixuan" v-if="point==3" style="display:block">

                    <h2 v-for="(i,index) in peisong" :key="index" class="peisong">
                        <p>配送方式</p>
                        <span v-if="i.text" @click="dianji($event,i,index)">
                            <i class="iconfont" style="color:blue;font-size:.2rem;margin:0 .1rem;" v-if="!peiarr[index]">&#xe603;</i>
                            <i class="right" style="font-size:0.3rem" v-if="peiarr[index]">√</i>
                            {{i.text}}
                        </span>
                    </h2>
                    <h2 class="shuxing">
                        <p>商家属性（可以多选）</p>
                        <span v-for="(i,$index) in shuxing" :key="$index" @click="showToggle($event,i,$index)" class="shangjia">
                            <i :style="{'color':'#'+i.icon_color+'','border':'1px solid #'+i.icon_color+''}" v-if="!peiarr[$index+1]">
                                {{i.icon_name}}
                            </i>
                            {{i.name}}
                            <i class="right" style="font-size:0.3rem" v-if="peiarr[$index+1]">√</i>
                        </span>
                    </h2>
                    <h2 class="qdqx">
                        <span class="null">
                            清空
                        </span>
                        <span @click="yes(index)">
                            确定
                        </span>
                    </h2>
                </div> 
            </div>
            
        </div>
            <merchant v-for="(i,index) in list" @int="shop(i.id)" :key="index">

            <template v-slot:left>
                <img :src="'https://elm.cangdu.org/img/'+i.image_path"
                    alt="">
            </template>
            <template v-slot:center>
                <div class="top">
                <span class="pinpai">
                    <template name="pinpai">品牌</template>
                </span>
                <span class="oName">
                    <template name="oName">{{i.name}}</template>
                </span>
                </div>
                <div class="center">
                <span class="star">
                    <template name="star">
                        <el-rate
                            v-model="i.rating"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                        </el-rate>
                    </template>
                </span>
                <span class="sell">
                    <template name="sell">月售{{i.rating_count}}单</template>
                </span>
                </div>
                <div class="bottom">
                <span class="send">
                    <template name="send">￥{{i.float_minimum_order_amount}}起送</template> /
                </span>
                <span class="fee">
                    <template name="fee">{{i.piecewise_agent_fee.tips}}</template>
                </span>
                </div>
            </template>
            <template v-slot:right>
                <div class="plan1">
                <div class="planbox">
                    <div class="plan"
                        v-for="(j,ind) in arr"
                        :key="ind">
                    <template name="plan">{{j.icon_name}}</template>
                    </div>
                </div>
                </div>
                <div class="give">
                <div class="givebox">
                    <span class="feng">
                    <template name="feng">蜂鸟专送</template>
                    </span>
                    <span class="zhun">
                    <template name="zhun">准时答</template>
                    </span>
                </div>
                </div>
                <div class="time">
                <div class="timebox">
                    <span class="km">
                    <template name="km">{{i.distance}}</template> /
                    </span>
                    <span class="minute">
                    <template name="minute">{{i.order_lead_time}}</template>
                    </span>
                </div>
                </div>
            </template>
            </merchant>
        </div>
</template>

<script>


</script>
<script>
import merchant from '../components/merchant'
import elmHead from '../components/head'
import Loading from '../components/loading'
export default {
	components:{
        elmHead:elmHead,
        merchant:merchant,
        Loading,
    },
    data () {
        return {
            isLoading: true,
            title:'',
            geohash:'',
            olist:[],
            paixu:[
                {name:'智能排序',icon:'icon-paixu'},
                {name:'距离最近',icon:'icon-weizhi'},
                {name:'销量最高',icon:'icon-redu'},
                {name:'起送价最低',icon:'icon-feiyong'},
                {name:'配送速度最快',icon:'icon-shijian'},
                {name:'评分最高',icon:'icon-xing'},
            ],
            kuaican:'',
            peisong:'',
            shuxing:'',
            index:'',
            isShow: false,
            isOpen:false,
            right:'',
            list: '',
            arr: '',
            ads_name: '',
            px:true,
            yes_no:true,
            classify:true,
            idx:0,
            order_by:4,//排序
            point:-1,
            elivery_mode:null,
            peiarr:[0,0,0,0,0,0,0],
            // isbtnlogin: false
        }
    },
    created () {
            this.geohash = localStorage.geohash,
            // console.log(this.geohash)
            fetch('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.geohash.split(',')[0] + '&longitude=' + this.geohash.split(',')[1]).then(response => response.json()).then(res => {
            this.list = res
            this.arr = res[0].supports
            this.isLoading=false
            })
            fetch('https://elm.cangdu.org/v2/pois/' + this.geohash).then(response => response.json()).then(res => {
            // this.ads_name = res.name
            // console.log(res.name)
            })
        fetch('https://elm.cangdu.org/shopping/v2/restaurant/category').then(response => response.json()).then(res => {
            // console.log(res)
            this.olist = res
            this.kuaican = res[2].sub_categories
        })
        //商家属性活动列表
        fetch('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes').then(response => response.json()).then(res => {
            // console.log(res)
            this.shuxing = res
        })
        //配送
        fetch('https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes').then(response => response.json()).then(res => {
            this.peisong = res
        })
    },
    methods:{
        shop(i){
            localStorage.id = i
            location.href = 'http://localhost:8080/shop'

        },
        isOp(){
            this.isOpen = !this.isOpen;
        },
        clk1(){
			if(this.point != 1) {
				this.point = 1
			} else {
                this.point = -1
            }
        },
        clk2(){
            if(this.point != 2) {
				this.point = 2
			} else {
                this.point = -1
            }
        },
        clk3(){
            if(this.point != 3) {
				this.point = 3
			} else {
                this.point = -1
            }
        },
        tab(index){
            this.idx=index
            for(var i=0;i<this.olist.length;i++){
                this.olist[i].show=false;
            }
            this.olist[index].show=true;
            this.kuaican = this.olist[index].sub_categories
        },
        showToggle(evt,i,index){
            if(!this.peiarr[index+1]){
                this.$set(this.peiarr,index+1,i.id)
            }else{
                this.$set(this.peiarr,index+1,0)
            }
        },
        dianji(evt,i,index){
            if(!this.peiarr[index]){
                this.$set(this.peiarr,index,i.id)
            }else{
                this.$set(this.peiarr,index,0)
            }
        },
        paixu1(index){
            this.px = !this.px
            this.point = -1
            this.isLoading=true
            if(index==0){
                this.order_by=4
            }else if(index==1){
                this.order_by=5
            }else if(index==2){
                this.order_by=6
            }else if(index==3){
                this.order_by=1
            }else if(index==4){
                this.order_by=2
            }else if(index==5){
                this.order_by=3
            }
            // console.log(this.order_by)
            fetch('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.geohash.split(',')[0] + '&longitude=' + this.geohash.split(',')[1]+'&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=null&order_by='+this.order_by+'&delivery_mode[]=null').then(response => response.json()).then(res => {
                console.log(res)
                 this.list = res
                 this.isLoading=false
            })
        },
        yes(index){
            this.isLoading=true
            this.yes_no = !this.yes_no
            var a=''
            this.peiarr.forEach(item=>{
                if(item!=0){
                    a+="&support_ids[]="+item
                }
                if(item==1){
                    this.elivery_mode=item
                }else{
                    this.elivery_mode=null
                    return
                }
            })
            a=a.slice(17)
            fetch('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.geohash.split(',')[0] + '&longitude=' + this.geohash.split(',')[1]+'&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=null&delivery_mode[]='+this.elivery_mode+'&'+a).then(response => response.json()).then(res => {
                console.log(res)
                 this.list = res
                 this.isLoading=false
            })
            this.point = -1
        },
        classify_n(index,i){
            this.point = -1
            this.classify = !this.classify;
            this.isLoading=true
            // console.log(i.id)
             fetch('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.geohash.split(',')[0] + '&longitude=' + this.geohash.split(',')[1]+'&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]='+i.id+'&order_by=null&delivery_mode[]=null').then(response => response.json()).then(res => {
                // console.log(res)
                 this.list = res
                 this.isLoading=false
            })
        }
    }
}
</script>


<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    .choose{
        color:#3190e8;
    }
    .shuxing span i{
        position: absolute;
       left: 0;
       top: 0;
        width: 0.4rem;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        margin-top: 0.05rem;
        font-style: normal;
    }
    .shuxing span .right,.peisong .right{
        position: absolute;
        left: 0;
        top: 0;
        width: 0.4rem;
        height: 0.4rem;
        color: blue;
        background-color: #fff;
        border: none;
    }
    .qdqx{
        height: 1rem;
        width: 6.4rem;
        background-color: #ccc;
    }
    .qdqx span{
        width: 3rem;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        display: inline-block;
        margin: .1rem;
        background-color: green;
        border-radius: .1rem;
        color: #fff;
    }
    .qdqx .null{
        margin-right: .1rem;
        background-color: white;
        border-radius: .1rem;
        color: #000;
    }

    .shuxing{
        height: 2rem;
        margin-bottom: .5rem;
         padding:.2rem;
    }
    .shuxing i{
        font-style: normal;
        font-size: .2rem;
        margin-left: .1rem;
        border-radius: .05rem;
        padding: .03rem;
        font-style: normal;

    }

    .shuxing p{
        font-size: .2rem;
    }
    .shuxing span{
        position: relative;
        padding-left: 0.65rem;
        display: inline-block;
        border-radius: .1rem;
        width: 1.8rem;
        height: .6rem;
        border:1px solid #eee;
        line-height: .6rem;
        font-size: .2rem;
        margin: .1rem;
    }
    .oitem .shaixuan{
        box-sizing: border-box;
        height: 5rem;
    }
    .shaixuan h2{
        line-height: normal;
        font-weight: normal;
    }
    .peisong{
         padding:.2rem;
        height: 1.5rem;
    }
    .peisong p{
        font-size: .2rem;
    }
    .peisong span i{
            position: absolute;
            left: 0;
            top: 0;
            width: 0.4rem;
            height: 0.4rem;
            color: blue;
            background-color: #fff;
            border: none;
            font-style: normal;
            text-align: center
    }
    .peisong span{
        display: block;
        border-radius: .1rem;
        width: 1.8rem;
        height: .6rem;
        border:1px solid #eee;
        line-height: .5rem;
        font-size: .2rem;
        position: relative;
        padding-left: 0.55rem;
    }
    .oitem .paixu ul{
        width: 6.4rem;
        padding-left: .5rem;
        box-sizing: border-box;
        overflow: hidden;
    }
    .paixu li{
        height: .9rem;
        line-height: .9rem;
        font-size: .2rem;
        border-bottom:1px solid #eee;
        width: 6.4rem;
    }
    .numbox{
        display: inline-block;
        width: 1.6rem;
        text-align: right;
    }
    .icon{
        font-size: .2rem;
        line-height: .6rem;
    }
    .num{
        padding: .05rem;
        background-color: #ccc;
        color: #fff;
        border-radius: .1rem;
        font-size: 0.15rem;
    }
    .fenlei p{
        height: 5.5rem;
        overflow: hidden;
        width: 50%;
        float: left;
        background-color: #fff;
        margin-top: -.1rem;
        padding: 0 .2rem;
        box-sizing: border-box;
        overflow-y:scroll;
    }

    .fenlei p i{
        float: right;
        font-style: normal;
    }
    .fenlei i{
        display: inline-block;
        height: .5rem;
        font-size: .25rem;
        font-style: normal;
    }
    .fenlei i img{
        margin-right: 0.1rem;
    }
    .fenlei li{
        font-size: .25rem;
        height: .6rem;
        line-height: .6rem;
    }
    .fenlei p span{
        display: inline-block;
        width: 100%;
        font-size: .2rem;
        height: .5rem;
        border-bottom: 1px solid #eee;
        height: .55rem;
    }
    .oitem ul{
        width: 50%;
        float: left;
        height: 5.5rem;
        box-sizing: border-box;
        margin-top: -.15rem;
    }
    .oitem ul li{
        padding: 0 0.1rem;
    }
    .oitem div{
        width: 6.4rem;
        height: 5.5rem;
        display: none;
       /* position: relative; */
        background-color:#fff;
    }
    .lists{
        height: 0.8rem;
        background-color: #fff;
        margin-top: 1rem;
    }
    .lists li{
        float: left;
        width: 33%;
        text-align: center;
        line-height: 0.4rem;
         padding: .2rem 0;
    }
    .lists li div{
        width: 100%;
        text-align: center;
        height: .5rem;
        border-right: .025rem solid #e4e4e4;
    }
    .lists li:last-child div{
        border-right:none;
    }
     .lists li span{
         font-size: .25rem;
     }
    
</style>