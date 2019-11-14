<template>
  <div class="login">
    <elmHead>
      <template v-slot:left><span class="lt" @click="$router.back(-1)">&lt;</span></template>
      <template v-slot:center>密码登录</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="container">
      <div>
        <input type="text" v-model="user" placeholder="账号">
      </div>
      <div>
        <input type="password" placeholder="密码" v-model="password">
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="Verify">
        <img :src="yanUrl" class="img">
        <span @click="random" style="cursor:pointer;margin-left:0.06rem;font-size:0.15rem">换一个</span>
      </div>
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <button @click="login">登录</button>
    </div>
    <div class="chong"><router-link to="/change" class="chong">重置密码?</router-link></div>

    <!-- 弹框 -->
     <dialog-bar v-model="sendVal" type="confirm" :content="txt" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" confirmText='确认'></dialog-bar>
  </div>
</template>

<script>
var md5 = require('md5')
import elmHead from '../components/head'
import dialogBar from '../components/alert'
export default {
  name: "login",
  components:{
    elmHead,
    'dialog-bar': dialogBar,
  },
  data() {
    return {
      user: "",
      password: "",
      Verify: "",
      randoms: "",
      yanUrl: "",
      sendVal: false,
      txt:'',
    };
  },
  created() {
    this.random();
    console.log(md5('message'));
  },
  methods: {
    login() {
      this.sendVal = true;
      this.$axios
        .post(
          "https://elm.cangdu.org/v2/login",
          {
            username: this.user,
            password: md5(this.password),
            captcha_code: this.Verify,
          },
        )
        .then(data => {
          if(this.user == data.data.username){
            this.txt='登录成功'
            this.$store.commit('setUserName',data.data.username)
            this.$store.commit('setUserId',data.data.user_id)
            this.$store.commit('setUsercity',data.data.city)
            this.$store.commit('setPoint',data.data.point)
            this.$store.commit('setBalance',data.data.balance)
            this.$store.commit('setGift_amount',data.data.gift_amount)
            setTimeout(()=>{
              this.$router.back(-1)
            },1000)
            localStorage.user = this.user
            localStorage.uid = data.data.user_id
          }else if(this.user==''){
            this.txt='请输入账号'
          }else if(this.password==''){
            this.txt='请输入密码'
          }else if(this.Verify==''){
            this.txt='请输入验证码'
          }else{
            this.txt=data.data.message
            this.random()
            this.password=''
            this.Verify = ''
          }
        });
    },
    clickConfirm(){
      
    },
    random() {
      this.$axios.post("http://elm.cangdu.org/v1/captchas",{}).then(data => {
        this.yanUrl = data.data.code;
      });
    },
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
input{
  border: none;
  outline: none;
  text-indent: 0.3rem;
  font-size: 0.3rem;
  display: inline-block;
  vertical-align: middle;
}
.pass{
  width: 50%;  
  margin: 0 auto;
  font-size: 0.3rem;
  color: #fff;
  font-weight: 800;
  text-align: center;
}
.container{
  width: 100%;
  height: auto;
  margin-top: 1.3rem;
  background-color: #fff;
}
.container div{
  width: 100%;
  height: 0.9rem;
  line-height: 0.8rem;
  border-bottom: 0.01rem solid #ccc;
  font-size: 0.24rem;
}
.img{
  display: inline-block;
  vertical-align: middle;
  margin-top: -0.02rem;
  margin-left: 0.4rem
}
.container p{
  color: red;
  font-size: 0.25rem;
  padding: 0.1rem 0.1rem;
}
.container button{
  outline: none;
  background-color: #4cd964;
  border: 0.01rem;
  width: 95%;
  height: 0.8rem;
  margin: 0 0.15rem;
  color: #fff;
  border-radius:0.05rem; 
  font-size: 0.3rem;
}
.chong{
  float: right;
  margin-right:0.2rem; 
  font-size: 0.3rem;
  color: #3b95e9;
  margin-top: 0.1rem;
}
.lt{
  color: #fff;
  text-decoration: none;
}
</style>