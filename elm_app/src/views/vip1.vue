<template>
  <div>
    <elmHead>
      <template v-slot:left>
        <router-link :to="{name:'users'}">&lt;</router-link>
      </template>
      <template v-slot:center>会员中心</template>
    </elmHead>
    <div>
      <div class="contain"
           v-if="$store.state.user.userName">
        <p style="padding:.1rem">为账户 <span style="font-weight: 700;font-size:.25rem">{{$store.state.user.userName}}</span> 购买会员</p>
        <div class="vip-item">
          <div class="tits"
               style="border-bottom: 1px solid gainsboro">
            <router-link :to="{name:'vipDescription'}"><span style="float:right;color:gray;font-size:.3rem">会员说明 > </span> </router-link>
            <p> 会员特权</p>
          </div>
          <div class="vip-logo">
            <dl>
              <dt><img src="../assets/sheng.jpg"
                     alt=""> </dt>
              <dd>
                <h5>减免配送费</h5>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟专送专享</p>
              </dd>
            </dl>
          </div>
          <div class="vip-logo">
            <dl>
              <dt><img src="../assets/jian.jpg"
                     alt=""> </dt>
              <dd>
                <h5>减免配送费</h5>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟专送专享</p>
              </dd>
            </dl>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <p style=" border-bottom: 1px solid gainsboro">开通会员</p>
            <router-link :to="{name:'payment'}">
              <div class="btn">购买</div>
            </router-link>
            <p>1个月
              <span style="color:#f60">￥20</span>
            </p>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <router-link :to="{name:'useCart'}">
              <p>兑换会员<span style="float:right">使用卡号卡密 ></span></p>
            </router-link>
          </div>
        </div>
        <div class="vip-item">
          <div class="tits">
            <router-link :to="{name:'invoiceRecord'}">
              <p>购买记录<span style="float:right">开发票 ></span></p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import elmHead from '../components/head'
export default {
  components: {
    elmHead: elmHead
  }
}
</script>
<style scoped>
@import "../css/vip.css";
</style>
