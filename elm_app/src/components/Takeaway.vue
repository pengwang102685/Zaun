<template>
  <div>
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <elmHead>
      <template v-slot:left>
        <router-link to="/about/search"><i class="iconfont">&#xe600;</i></router-link>
      </template>
      <template v-slot:center>
        <router-link to="/">{{ads_name}}</router-link>
      </template>
      <template v-slot:right
                v-if="!isbtnlogin">
        <router-link to="/login"
                     class="login">登录/注册</router-link>
      </template>
      <template v-slot:right
                v-else-if="isbtnlogin">
        <router-link to="/about/user"
                     class="login"><i class="iconfont">&#xe602;</i></router-link>
      </template>
    </elmHead>
    <elmBanner>
    </elmBanner>

    <div class="fujin">
      <i class="iconfont">&#xe603;</i>
      <span>附近商家</span>
    </div>

    <merchant v-for="(i,index) in list" @int="shop(i.id)"
              :key="index">
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
              <template name="feng">{{i.delivery_mode.text}}</template>
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

    <elmfoot num=0></elmfoot>
  </div>
</template>

<script>
import merchant from './merchant'
import elmBanner from './Banner'
import elmfoot from './foot'
import elmHead from './head'
import Loading from './loading'
export default {
  props: ['name'],
  name: 'Takeaway',
  components: {
    elmBanner,
    merchant,
    elmHead,
    elmfoot,
    Loading
  },
  methods:{
    shop(i){
         console.log(i)
        localStorage.id = i
        // location.href = 'http://localhost:8080/shop'
        this.$router.push({path:'/shop'})
    }
  },
  data () {
    return {
      list: '',
      arr: '',
      ads_name: '',
      isbtnlogin: false,
      isLoading: true
      //   jieshouList: this.$route.query.geohash
    }
  },
  created () {
    // console.log(this.jieshouList)
    if (localStorage.user) {
      this.isbtnlogin = true
    } else {
      this.isbtnlogin = false
    }
    fetch('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$route.query.geohash.split(',')[0] + '&longitude=' + this.$route.query.geohash.split(',')[1]).then(response => response.json()).then(res => {
      this.list = res
      this.arr = res[0].supports
      this.isLoading = false
    })
    fetch('https://elm.cangdu.org/v2/pois/' + this.$route.query.geohash).then(response => response.json()).then(res => {
      this.ads_name = res.name
    })
  }
}
</script>
<style>
.el-rate__icon{
  margin-right: 0 !important;
  font-size: 0.12rem !important;
}
.el-icon-star-on{
  font-size: 0.12rem !important;
}
.el-rate__text {
  font-size: 0.14rem !important;
}
</style>
<style scoped>
.fujin {
  padding: 0 0.24rem;
  background: #fff;
  line-height: 0.6rem;
  border-top: 0.14rem solid #eee;
}
.fujin span {
  font-size: 0.24rem;
  color: rgb(107, 101, 101);
}

.fujin i {
  font-size: 0.24rem;
  margin-right: 0.14rem;
  color: rgb(107, 101, 101);
}
</style>
