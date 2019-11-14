<template>
  <div>
    <!-- <div class="header">
      <div class="r">
        <router-link to class="color"><</router-link>
      </div>
      <div class="pass">重置密码</div>
    </div> -->
    <elmHead>
      <template v-slot:left> <span class="login" @click="$router.back(-1)">&lt;</span></template>
      <template v-slot:center>重置密码</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="container">
      <div>
        <input type="text" v-model="user" placeholder="账号">
      </div>
      <div>
        <input type="password" placeholder="旧密码" v-model="oldpassword">
      </div>
      <div>
        <input type="password" placeholder="请输入新密码" v-model="newpassword">
      </div>
      <div>
        <input type="password" placeholder="请确认密码" v-model="confirmpassword">
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="Verify">
        <img :src="yanUrl" class="img">
        <span @click="random" style="cursor:pointer;margin-left:0.01rem;font-size:0.22rem;">换一个</span>
      </div>
      <button @click="confirm">确认修改</button>
    </div>
  </div>
</template>
<script>
var md5 = require('md5')
import elmHead from '../components/head'
export default {
  name: "change",
  components:{
    elmHead
  },
  data() {
      return {
          user:'',/*用户账号*/
          oldpassword:'',/*旧密码*/
          newpassword:'',/*新密码*/
          confirmpassword:'',/*确认密码*/
          Verify:'',/*验证码的双向绑定*/
          yanUrl:''/*验证码 */
      }
  },
  created() {
      this.random()
  },
  methods: {
      confirm(){
      this.$axios.post('https://elm.cangdu.org/v2/changepassword',
      {
        username:this.user,
        oldpassWord:md5(this.oldpassword),
        newpassword:md5(this.newpassword),
        confirmpassword:md5(this.confirmpassword),
        captcha_code:this.Verify
      }).then(data=>{
        console.log(data);
        if(!this.user){
            alert('请输入账号')
        }else if(!this.oldpassword){
            alert('请输入旧密码')
        }else if(!this.newpassword){
            alert('请输入新密码')
        }else if(!this.confirmpassword){
            alert('请输入确认密码')
        }else if(this.newpassword!=this.confirmpassword){
            alert('两次输入的密码不一致')
        }else if(!this.Verify){
            alert('请输入验证码')
        }else if(data.data.status!=0){
            alert(data.data.success)
        }else{
            alert(data.data.message)
            this.random()
        }
        
      })
    },
    random() {
      this.$axios.post("http://elm.cangdu.org/v1/captchas",{}).then(data => {
        this.yanUrl = data.data.code;
      });
    },
  },
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
  height: auto;
  margin-top: 1.2rem;
  background-color: #fff;
}
.container div{
  width: 100%;
  /* height: 0.8rem; */
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
  margin-top: 0.3rem;
}
.login{
  color: #fff;
  text-decoration: none;
}
</style>