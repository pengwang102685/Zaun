<template>
  <div>
    <elmHead>
      <template v-slot:left>
        <span @click="$router.back(-1)">&lt;</span>
      </template>
      <template v-slot:center>账户信息</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="content">
      <div class="item">
        <h2>头像</h2>
        <input type="file">
        <div class="img">
          <img :src="info_img2" alt>
          <span class="svg">></span>
        </div>
      </div>
      <div class="item_user">
        <h2>用户名</h2>
        <div>
          <span>
            <router-link to="/about/user/setusername" class="n">{{info_user2}}</router-link>
          </span>
          <span>></span>
        </div>
      </div>
      <div class="item_user">
        <router-link :to="{name:'add'}" class="add">
          <h2>收货地址</h2>
          <span style="color:#ccc;">></span>
        </router-link>
      </div>
      <h1>账号绑定</h1>
      <div class="item_user">
        <h2>手机</h2>
        <span style="color:#ccc;">></span>
      </div>
      <h1>安全设置</h1>
      <div class="item_user">
        <h2>登录密码</h2>
        <div>
          <span>
            <router-link to="/change" class="password">修改密码</router-link>
          </span>
          <span>></span>
        </div>
      </div>
    </div>
    <button @click="log_out">退出登录</button>
    <!-- 弹框 -->
    <dialog-bar v-model="sendVal" type="danger" :content="txt" v-on:cancel="clickCancel()" cancelText='取消' @danger="clickDanger()" @confirm="clickConfirm()" confirmText='确认'></dialog-bar>
  </div>
</template>
<script>
import elmHead from "../components/head";
import dialogBar from '../components/alert'
export default {
  components: {
    elmHead,
    'dialog-bar': dialogBar,
  },
  data() {
    return {
      info_user2: "",
      info_img2: "",
      sendVal: false,
      txt:'确定要退出登录',
    };
  },
  created() {
    info: {
      this.$axios.get("https://elm.cangdu.org/v1/user").then(data => {
        this.info_img2 = "//elm.cangdu.org/img/" + data.data.avatar;
        // this.info_user2 = data.data.username
        this.info_user2 = localStorage.user;
      });
    }
  },
  methods: {
    log_out() {
      this.sendVal = true;
    },
    clickCancel(){
        console.log('点击了取消');
    },
    clickConfirm(){
        this.$axios.get("https://elm.cangdu.org/v2/signout").then(data => {
          this.txt=data.data.message
          this.$store.commit('setUserName','')
          this.$store.commit('setUserId','')
          this.$store.commit('setUsercity','')
          this.$store.commit('setPoint',0)
          this.$store.commit('setBalance',0)
          this.$store.commit('setGift_amount',0)
          history.go(-1);
          localStorage.removeItem('user')
      });
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.content {
  width: 100%;
  height: auto;
  margin-top: 1.2rem;
}
h2 {
  font-size: 0.25rem;
  color: #333;
  font-weight: 500;
}
h1 {
  padding: 0.2rem;
  font-size: 0.25rem;
  color: #666;
}
.item {
  height: 1.3rem;
  padding: 0.25rem 0.2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  position: relative;
}
.item input {
  display: block;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.3rem;
}
.img {
  width: 1.2rem;
  height: 100%;
  float: right;
}
.img img {
  width: 0.8rem;
  height: 100%;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.svg {
  float: right;
  margin-top: 0.15rem;
  color: #ccc;
}
.item_user {
  height: 1rem;
  padding: 0.2rem 0.2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  position: relative;
}
.item_user div {
  float: right;
}
.item_user div span:nth-of-type(1) {
  color: #ccc;
  font-size: 0.3rem;
}
.item_user div span:nth-of-type(2) {
  color: #ccc;
  margin-left: 0.1rem;
}
.password {
  font-size: 0.3rem;
  color: #999;
}
button {
  width: 95%;
  height: 0.6rem;
  margin: 0.1rem 0.16rem;
  margin-top: 0.5rem;
  background-color: red;
  color: #fff;
  border: 0;
  font-size: 0.3rem;
  border-radius: 0.1rem;
  outline: none;
  cursor: pointer;
}
.add {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  position: relative;
}
.add span{
    float: right;
}
.n{
  color: #999;
  font-size: 0.28rem;
}
</style>
