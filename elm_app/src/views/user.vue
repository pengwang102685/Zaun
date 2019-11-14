<template>
  <div>
    <div class="contain">
      <elmHead>
        <template v-slot:left>
          <span @click="$router.back(-1)">&lt;</span>
        </template>
        <template v-slot:center>我的</template>
        <template v-slot:right></template>
      </elmHead>
      <div class="lz_info" @click="info">
        <div to="" @click="to" class="lz_info_a">
          <div class="lz_info_img">
            <img :src="info_img" alt>
          </div>
          <div class="lz_info_user">
            <div style="margin-left:0.2rem;" v-if="!isbtn" class="l">登录/注册</div>
            <p v-else-if="isbtn">{{info_user}}</p>
            <p>
              <span class="iconfont" style="margin-right:0.1rem">&#xe68a;</span>
              <span style="font-size:0.25rem;">暂无绑定手机号</span>
            </p>
          </div>
          <span style="float:right;margin-top:0.2rem;color:#fff;">&gt;</span>
        </div>
      </div>
      <!-- 个人资料/信息 -->
      <div class="ziliao">
        <dl>
          <router-link :to="{name:'explain'}">
            <dt><span class="orange">{{$store.state.user.balance}}.00</span>元</dt>
            <dd>我的余额</dd>
          </router-link>
        </dl>
        <dl>
          <router-link :to="{name:'benefit'}">
            <dt><span class="red">{{$store.state.user.gift_amount}}</span>个</dt>
            <dd>我的优惠</dd>
          </router-link>
        </dl>
        <dl>
          <router-link :to="{name:'integral1'}">
            <dt><span class="green">{{$store.state.user.point}}</span>分</dt>
            <dd>我的积分</dd>
          </router-link>
        </dl>
      </div>
      <!-- 服务 -->
      <div class="fuwu">
        <div class="item">
          <router-link :to="{name:'Order'}">
            <li>
              <i class="iconfont icon-dingdan"></i>
              <p>
                我的订单<span class="f-r">></span>
              </p>
            </li>
          </router-link>
          <router-link :to="{name:'shopping'}">
            <li>
              <i class="iconfont icon-baobao"></i>
              <p>
                积分商城
                <span class="f-r">></span>
              </p>
            </li>
          </router-link>
          <router-link :to="{name:'vip'}">
            <li>
              <i class="iconfont icon-fuwu"></i>
              <p>
                饿了么会员卡
                <span class="f-r">></span>
              </p>
            </li>
          </router-link>
        </div>
        <div class="item">
          <router-link :to="{name:'service'}">
            <li>
              <i class="iconfont icon-vip"></i>
              <p>
                服务中心
                <span class="f-r">></span>
              </p>
            </li>
          </router-link>
          <router-link :to="{name:'app'}">
            <li>
              <i class="iconfont icon-changyonglogo40"></i>
              <p>
                下载饿了么APP
                <span class="f-r">></span>
              </p>
            </li>
          </router-link>
        </div>
      </div>
      <elmfoot num=3></elmfoot>
    </div>
  </div>
</template>
<script>
import elmfoot from "../components/foot";
import elmHead from "../components/head";
export default {
  name: "user",
  components: {
    elmfoot,
    elmHead
  },
  data () {
    return {
      info_img: "",
      info_user: "",
      isbtn: false,
      btn: false
    };
  },
  created() {
    this.info();
    if (localStorage.user) {
      this.isbtn = true;
    } else {
      this.isbtn = false;
    }
  },
  methods: {
    to() {
      if (localStorage.user) {
        this.$router.push({path:'/about/user/info'})
      } else {
        this.$router.push({path:'/login'})
      }
    },
    info() {
      this.$axios.get("https://elm.cangdu.org/v1/user").then(data => {
        this.info_img = "//elm.cangdu.org/img/" + data.data.avatar;
        this.info_user = localStorage.user;
      });
    }
  }
};
</script>
<style scoped>
@import '../css/user.css'
</style>