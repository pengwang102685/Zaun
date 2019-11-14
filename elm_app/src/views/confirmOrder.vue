<template>
  <div class="confirmOrder">
    <elmHead>
      <template v-slot:left>
        <span @click="$router.back(-1)">&lt;</span>
      </template>
      <template v-slot:center>确认订单</template>
      <template v-slot:right v-if="!isbtnlogin">
        <router-link :to="{name:'login'}" class="login">登录/注册</router-link>
      </template>
      <template v-slot:right v-else-if="isbtnlogin">
        <router-link :to="{name:'users'}" class="login">
          <i class="iconfont">&#xe602;</i>
        </router-link>
      </template>
    </elmHead>
    <div class="add_address" v-show="!inshow">
      <router-link :to="{path:'/about/confirmOrder/chooseaddress'}">
        <p>
          请添加一个收货地址
          <span class="fr">&gt;</span>
        </p>
      </router-link>
    </div>
    <div style="padding:0.3rem;background-color:#fff;" v-show="inshow">
      <router-link :to="{path:'/about/confirmOrder/chooseaddress'}">
        <div>
          <span style="font-size:0.35rem;font-weight:800;margin:0rem 0.15rem;">{{$store.state.order.orderName}}</span>
          <span style="font-size:0.3rem;margin:0rem 0.07rem;">{{data.sex==sex?'先生':'女士'}}</span>
          <span style="font-size:0.3rem;">{{$store.state.order.orderPhone}}</span>
        </div>
        <div style="width:100%;height:0.5rem;">
          <span class="tag">{{$store.state.order.orderTag}}</span>
          <span style="font-size:0.3rem;float: left;">{{$store.state.order.orderAddress_detail}}</span>
          <div style="float:right;position: relative;top:-0.3rem;color:#ccc;font-size:0.5rem;">></div>
        </div>
      </router-link>
    </div>
    <div class="deliveryTime">
      <p>送达时间</p>
      <div class="quickly">
        <p>尽快送达 | 预计 19:09</p>
        <p>蜂鸟专送</p>
      </div>
    </div>
    <div class="PayWay">
      <div class="PayWay_top clearfix" @click="PayWay_top($event)">
        <span class="fl">支付方式</span>
        <span class="fr ccc">在线支付&nbsp;&nbsp; &gt;</span>
      </div>
      <div class="PayWay_bottom clearfix">
        <span class="fl ccc">红包</span>
        <span class="fr ccc">暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <div class="detail">
      <div class="detail_one">
        <img src>
        <span>效果演示</span>
      </div>
      <div class="detail_two clearfix">
        <span class="detail_two_l fl">123</span>
        <span class="detail_two_c fr">￥20</span>
        <span class="detail_two_r fr red cuo">×</span>
      </div>
      <div class="detail_five">
        <p>
          订单
          <span>￥7687</span>
        </p>
        <p class="fr">
          待支付
          <span>￥7687</span>
        </p>
      </div>
    </div>
    <div class="beizhu">
      <router-link to="/about/confirmOrder/kouwei">
        <p class="beizhu1">
          <span>定单备注</span>
          <span class="fr">
              <span v-for="(i,index) in list" :key="index" v-show="txttype">{{i}} </span>
              <span v-show="!txttype">口味、偏好等</span> &gt;
          </span>
        </p>
      </router-link>

      <router-link to="/about/confirmOrder/invoice">
        <p class="beizhu2">
          <span>发票抬头</span>
          <span class="fr">不需要开发票 &gt;</span>
        </p>
      </router-link>
    </div>
    <!-- <div class="footer" id="foot">
      <div class="footer_l fl">
        待支付￥
        <span>7687</span>
      </div>
      <div class="footer_r fr" @click="confimInformation()">确认下单</div>
    </div> -->
    <div v-show="show">
      <div class="cover" @click="notShow"></div>
      <div class="payToTop">
        <div class="pay">
          <p>支付方式</p>
          <ul>
            <li>
              <span>货到付款(商家不支持货到付款)</span>
              <input type="checkbox" disabled class="fr">
            </li>
            <li>
              <span>在线支付</span>
              <input type="checkbox" checked='true' class="fr">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="alet_container" v-show="isconfirm">
      <section class="tip_text_container">
        <div class="tip_icon">
          <span></span>
          <span></span>
        </div>
        <p class="tip_text">请添加一个收货地址</p>
        <p class="con" @click="confimInformation()">确认</p>
      </section>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import elmHead from "../components/head";
export default {
  components: {
    elmHead
  },
  data() {
    return {
      isbtnlogin: false,
      // ff: '',
      covers: "", // cover
      payWay: "", // 支付方式
      show: false,
      isconfirm: false,
      inshow: false,
      data: "",
      sex: 0,
      list:'',
      txttype:false
    };
  },
  created() {
    this.sex=this.$store.state.order.orderSex
    console.log(this.$store.state.order)
    if (localStorage.user) {
      this.isbtnlogin = true;
    } else {
      this.isbtnlogin = false;
    }
    if(this.$store.state.order.orderName){
      this.inshow = true;
    }else{
      this.inshow = false;
    }
    info:{
      this.$axios.get('https://elm.cangdu.org/v1/users/'+localStorage.uid+'/addresses').then(data=>{
        // console.log(data);
        
      })
    }
  },
  updated() {
    if(this.$route.params.name){
      this.data = this.$route.params.name;
      this.inshow = true;
    }
    if(this.$route.params.list){
      this.list=this.$route.params.list
      this.txttype=true
    }else{
      
    }
  },
  methods: {
    PayWay_top(e) {
      this.show = !this.show;

      // console.log(this.PayWay_top)  不会报错，会打印出一个function
      // ƒ PayWay_top() { console.log(this.PayWay_top); }
    },
    notShow() {
      this.show = !this.show;
    },
    confimInformation() {
      this.isconfirm = !this.isconfirm;
    }
  },
  mounted() {
    // this.f = document.querySelector('#foot')
    // this.f.style.zIndex = '2000'
    // this.f.style.display = 'block'
  }
};
</script>
<style scoped>
.confirmOrder {
  padding-top: 1rem;
}
.detail_two .red {
  color: #f60;
  margin-right: 0.3rem;
  font-weight: 400;
  line-height: 0.8rem;
}
.ccc {
  color: #aaa;
}
* {
  margin: 0;
  padding: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}

.confirmOrder {
  background-color: #f5f5f5;
  padding-bottom: 1rem;
}
header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #3190e8;
  color: #fff;
}
.headIcon {
  margin-right: 0.2rem;
  font-size: 0.3rem;
}
.h_left {
  margin-left: 0.2rem;
}
.h_center {
  font-size: 0.3rem;
  margin-left: 36%;
}
.add_address {
  width: 100%;
  height: 1rem;
  border-bottom: 2px dashed #f5f5f5;
  background: #fff;
}
.add_address p {
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.add_address p span {
  margin-right: 0.2rem;
  color: #999;
}
.deliveryTime {
  background-color: white;
  margin-top: 0.3rem;
  border-left: 0.1rem solid #3190e8;
  min-height: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.2rem;
}
.deliveryTime p {
  font-size: 0.3rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.3rem;
}
.quickly {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.quickly p:first-of-type {
  font-size: 0.26rem;
  color: #3190e8;
  margin-right: 0.1rem;
  font-weight: 400;
}
.quickly p:nth-of-type(2) {
  font-size: 0.2rem;
  color: #fff;
  background-color: #3190e8;
  width: 1.2rem;
  margin-top: 0.05rem;
  margin-right: 0.3rem;
  text-align: center;
  padding: 0rem;
}
.PayWay {
  margin-top: 0.2rem;
  background-color: white;
}
.PayWay_top,
.PayWay_bottom {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f5f5f5;
}
.PayWay_top span,
.PayWay_bottom span {
  font-size: 0.26rem;
}
.detail {
  background-color: white;
  margin-top: 0.2rem;
}
.detail_one,
.detail_two,
.detail_three,
.detail_four,
.detail_five {
  border-bottom: 1px solid #f5f5f5;
}
.detail_one {
  height: 1.2rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.detail_one img {
  width: 0.6rem;
  height: 0.6rem;
  border: 1px solid;
  vertical-align: middle;
}
.detail_one span {
  font-size: 0.3rem;
  vertical-align: middle;
  margin-left: 0.2rem;
  color: #333;
}
.detail_two {
  padding: 0 0.2rem;
  vertical-align: middle;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.1rem;
  font-size: 0.24rem;
}
.detail_two span {
  font-size: 0.24rem;
  color: #666;
}
/* .cuo {
  margin-top: -0.1rem;
} */
.detail_two_l,
.detail_two_c,
.detail_two_r {
  font-size: 0.3rem;
}
.detail_three {
  background-color: white;
  height: 1rem;
  padding: 0.2rem;
  margin-top: -0.08rem;
}
.detail_three span {
  font-size: 0.3rem;
}
.detail_four {
  background-color: white;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.detail_four span {
  font-size: 0.3rem;
}
.detail_five {
  background-color: white;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.detail_five > p {
  font-size: 0.24rem;
  display: inline-block;
  line-height: 1rem;
  color: #666;
}
.detail_five > p > span {
  font-size: 0.24rem;
  color: #666;
}
.detail_five > p:first-of-type span {
  margin-left: 0.2rem;
}
.detail_five > p:last-of-type {
  color: #f60;
}
.detail_five > p:last-of-type span {
  color: #f60;
  margin-left: 0.2rem;
}
.toPay {
  height: 1.2rem;
  line-height: 0.3rem;
  position: relative;
}
.toPay span {
  font-size: 0.3rem;
}
.yuan {
  position: absolute;
  top: 0.4rem;
  right: 0.08rem;
}
.beizhu {
  height: 2rem;
  background-color: #fff;
  margin-top: 0.3rem;
}
.beizhu1,
.beizhu2 {
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f5f5f5;
  color: #666;
}
.beizhu1 span,
.beizhu2 span {
  font-size: 0.24rem;
}
.beizhu1 span:last-of-type,
.beizhu2 span:last-of-type {
  color: #aaa;
}
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 203;
}
.pay {
  min-height: 4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 204;
}
.pay p {
  background-color: #fafafa;
  font-size: 0.3rem;
  color: #333;
  text-align: center;
  line-height: 0.8rem;
}
.pay ul li {
  line-height: 1rem;
  position: relative;
  padding-left: 0.2rem;
  border-bottom: #999 1px solid;
}
.pay ul li input {
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
}
.pay ul li:first-of-type span {
  color: #ccc;
  font-size: 0.3rem;
}
.pay ul li:last-of-type span {
  font-size: 0.3rem;
}
.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
.tip_text_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 5rem;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-top: -1.5rem;
  margin-left: -6rem;
  width: 12rem;
  padding-top: 0.6rem;
  border: 1px;
  border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.2);
}
.tip_text_container .tip_icon {
  width: 2rem;
  height: 2rem;
  border: 0.15rem solid #f8cb86;
  border-radius: 50%;
}
.tip_text_container .tip_icon span:first-of-type {
  width: 0.12rem;
  height: 0.9rem;
  display: inline-block;
  background-color: #f8cb86;
  position: relative;
  left: 0.8rem;
  top: 0.2rem;
}
.tip_text_container .tip_icon span:nth-of-type(2) {
  width: 0.2rem;
  height: 0.2rem;
  border: 1px;
  border-radius: 50%;
  margin-top: 0.2rem;
  background-color: #f8cb86;
  display: inline-block;
  position: relative;
  left: 0.64rem;
  top: 0.6rem;
}
.tip_text {
  color: orangered;
  margin-top: 0.3rem;
}
.con {
  height: 1rem;
  margin-top: 0.3rem;
  color: #fff;
  font-size: 0.6rem;
  font-weight: bolder;
  display: inline-block;
}
.con:hover {
  color: #ccc;
  cursor: pointer;
}

.footer {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  z-index: 200;
}
.footer_l {
  width: 70%;
  height: 1rem;
  color: #fff;
  font-size: 0.3rem;
  background-color: #3c3c3c;
}
.footer_r {
  width: 30%;
  height: 1rem;
  color: #fff;
  font-size: 0.3rem;
  background-color: #56d176;
}
.tag {
  width: 0.5rem;
  height: 0.3rem;
  float: left;
  text-align: center;
  background-color: rgb(76, 217, 100);
  font-size: 0.2rem;
  color: #fff;
  margin: 0.08rem 0.2rem;
}
</style>
