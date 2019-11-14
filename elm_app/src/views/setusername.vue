<template>
  <div>
    <elmHead>
      <template v-slot:left>
        <span @click="$router.back(-1)">&lt;</span>
      </template>
      <template v-slot:center>修改用户名</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="set_user">
      <input type="text" placeholder="请输入用户名" v-model="set_user" @input="setusers($event)">
      <p>{{usernames}}</p>
      <button @click="setuser">确认修改</button>
    </div>
  </div>
</template>
<script>
import elmHead from "../components/head";
export default {
  name: "setusername",
  components: {
    elmHead
  },
  data() {
    return {
      set_user: "",
      usernames:'用户名只能修改一次（5-24字符之间）',
    };
  },
  methods: {
    setusers(e){
      var input = e.target
      var p = e.path[1].children[1]
      if(!(/^\d{5,24}$/).test(this.set_user)){
        this.usernames = '用户名长度在5到24位之间'
        input.style.borderColor='red'
        p.style.color = 'red'
      }else{
        this.usernames = '用户名只能修改一次（5-24字符之间）'
        input.style.borderColor='#ccc'
        p.style.color = '#999'
      }
    },
    setuser() {
      this.$axios.get("https://elm.cangdu.org/v1/user").then(data => {
        data.data.username = this.set_user;
        localStorage.user = this.set_user
      });
      this.$router.back(-1)
    }
  }
};
</script>
<style scoped>
.set_user {
  width: 100%;
  height: auto;
  margin-top: 1rem;
}
.set_user input {
  width: 95%;
  height: 0.7rem;
  font-size: 0.3rem;
  margin: 0.1rem 0.15rem;
  border: 1px solid #ccc;
  text-indent: 0.2rem;
}
.set_user p {
  padding: 0.1rem 0.2rem 0.2rem;
  color: #999;
  font-size: 0.23rem;
}
.set_user button {
  width: 95%;
  height: 0.8rem;
  margin: 0.1rem 0.15rem;
  border: 0;
  background-color: #3199e8;
  color: #fff;
  font-size: 0.25rem;
}
</style>
