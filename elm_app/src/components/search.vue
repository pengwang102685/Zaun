<template>
  <div class="search">
    <elmHead>
      <template v-slot:left>
        <span @click="$router.back(-1)">&lt;</span>
      </template>
      <template v-slot:center>搜索</template>
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
    <div class="search_box">
      <!-- <form action="#"> -->
      <input type="search"
             class="search_input"
             placeholder="请输入商家或美食名称"
             v-model="iptValue" @input='ipt($event)'/>
      <button class="search_button"
              @click="btnClick">提交</button>
      <!-- </form> -->
      <ul class="commit_list" v-if="type">
        <li v-if="iptValue==''"></li>
        
          <!-- 搜索列表 -->
        <merchant v-for="(i,index) in searchlist" @int="shop(i.id)"
                  :key="index" @click="place(item)">
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

          <!--  -->
      </ul>
    </div>
    <div v-if="type==''" class="search_history">
      <h3>搜索历史</h3>
      <ul>
        <li v-if="iptValueArray==''"></li>
        <li class="histroy_list"
            v-for="(item,index) in iptValueArray"
            :key="index">
            <span @click='sou($event)'>{{item}}</span>
            <span class="fr" @click="clearItem">×</span>
        </li>
      </ul>
      <p class="clearhistory"
         @click="clearHistory()">清空历史</p>
    </div>
    <elmfoot num=1></elmfoot>
  </div>
</template>

<script>
import elmfoot from './foot'
import elmHead from './head'
import merchant from '../components/merchant'
export default {
  name: 'seach',
  components: {
    elmHead,
    elmfoot,
    merchant
  },
  data () {
    return {
      isbtnlogin: false,
      geohash: '',
      iptValue: '',
      searchlist: '',
      city_id: '',
      keyword: '',
      nulls: '',
      arr:'',
      // 搜索历史
      iptValueArray: [],
      type:'',
    }
  },
  created () {
    if (localStorage.iptValueArray) {
      this.iptValueArray = JSON.parse(localStorage.iptValueArray)
    } else {
      this.iptValueArray = []
    }

    this.geohash = localStorage.geohash
    if (localStorage.user) {
      this.isbtnlogin = true
    } else {
      this.isbtnlogin = false
    }
  },
  methods: {
    // 跳转
    shop(i){
         console.log(i)
        localStorage.id = i
        location.href = 'http://localhost:8080/shop'
    },
    // 搜索
    btnClick () {
      if (this.iptValue == '') {
        this.nulls = '输入为空！！！'
        this.searchlist = ''
      } else {
        this.$http.get('https://elm.cangdu.org/v4/restaurants', {
          params: {
            geohash:'31.22967,121.4762',
            keyword:this.iptValue
          }
        }).then((res) => {
          console.log(res.body)
          this.searchlist = res.body
        })
      }
      this.iptValueArray.unshift(this.iptValue)
      localStorage.iptValueArray = JSON.stringify(this.iptValueArray)
      this.type=true
    },
    ipt(e){
      if(e.target.value == ''){
          this.type = false;
      }
    },
    // 清空历史
    clearHistory () {
      this.iptValueArray = []
      localStorage.removeItem("iptValueArray")
    },
    // 单个删除
    clearItem (b) {
      this.iptValueArray.shift(b)
      localStorage.iptValueArray = JSON.stringify(this.iptValueArray)
    },
    // 点击历史列表
    sou(e){
        this.iptValue = e.target.innerText;
        this.btnClick()
    }

  }

}
</script>

<style scoped>
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

.search {
  width: 6.4rem;
  padding-top: 1rem;
  min-height: 10rem;
  background-color: #f5f5f5;
  padding-bottom: 1rem;
}
.search_box {
  width: 6.4rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  background-color: white;
}
.search_input {
  width: 4.5rem;
  height: 0.6rem;
  border: 0.025rem solid #e4e4e4;
  font-size: 0.24rem;
  color: #333;
  border-radius: 0.06rem;
  background-color: #f2f2f2;
  font-weight: 500;
  padding: 0 0.25rem;
  vertical-align: top;
  outline: none;
  margin-left: 0.15rem;
  font-weight: 700;
}
.search_button {
  width: 1.5rem;
  height: 0.6rem;
  line-height: 0.5rem;
  border: 0.025rem solid #3190e8;
  margin-left: 0.1rem;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.06rem;
  background-color: #3190e8;
  font-weight: 500;
  vertical-align: top;
}
.search_history {
  width: 6.4rem;
}
.search_history h3 {
  padding-left: 0.2rem;
}
.search_history ul {
  width: 100%;
  background-color: #fff;
}
.search_history ul li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
  background-color: #fff;
  padding-left: 0.2rem;
}
.search_history ul li p{
  width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.2rem;
  overflow: hidden;
}
.commit_list {
  width: 100%;
  background-color: #fff;
}
.commit_list li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
  background-color: #fff;
  padding-left: 0.2rem;
}
.commit_list li p{
  width: 80%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.2rem;
}
.clearhistory {
  font-size: 0.3rem;
  /* padding-left: 0.2rem; */
  color: #3190e8;
  text-align: center;
  line-height: 0.6rem;
  font-weight: bolder;
}
/* .list {
  height: 1rem;
  margin-top: 0.2rem;
}
.list_left {
  width: 20%;
}
.list_right {
  width: 80%;
  display: inline-block;
} */
.histroy_list {
  height: 1rem;
  line-height: 1rem;
}
.histroy_list span {
  display: inline-block;
  font-size: 0.23rem;
  color: #555;
  margin-right: 0.5rem;
}
</style>
