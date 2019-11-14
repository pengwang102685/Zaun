<template>
  <div>
    <elmHead>
      <template v-slot:left>
        <span @click="$router.back(-1)">&lt;</span>
      </template>
      <template v-slot:center>新增地址</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="content">
      <div>
        <input type="text" placeholder="请填写你的姓名" v-model="user_s.users" @input="update_dtc($event)">
        <p v-if="sname">请填写您的姓名</p>
      </div>
      <div>
        <router-link to="/about/user/adds/addss">
          <input type="text" placeholder="小区/写字楼/学校等" v-model="user_s.add_ress" @input="update_dtd($event)">
        </router-link>
      </div>
      <div>
        <input type="text" placeholder="请填写详细送餐地址" v-model="user_s.add_d" @input="update_dts($event)">
        <p v-if="sadd">{{saddname}}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="请填写能够联系到您的手机号"
          v-model="user_s.user_number"
          @input="update_dtn($event)"
        >
        <p v-if="t_number">{{ts_number}}</p>
      </div>
      <div>
        <input type="text" placeholder="备用联系电话（选填）" v-model="user_s.snumber" @input="update_dta($event)">
        <p v-if="number_s">请输入正确的手机号</p>
      </div>
    </div>
    <button @click="add">新增地址</button>
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
      user_s: {
        users: "",
        add_d: "",
        user_number: "",
        snumber: "",
        add_ress: ""
      },
      number_s:false, /*备用手机号*/
      t_number:false, /*手机号*/
      sname:false,  /*名字*/
      sadd:false, /*地址*/
      saddname:'',/*地址，p的切换*/
      ts_number:'', /*手机号，p的切换*/
      uid: ""
    };
  },
  created() {
    this.user_s.add_ress = this.$route.params.name;
    localStorage.add_ress = this.user_s.add_ress;
    if (localStorage.user_s) {
      this.user_s.users = JSON.parse(localStorage.user_s).users;
      this.user_s.add_d = JSON.parse(localStorage.user_s).add_d;
      this.user_s.user_number = JSON.parse(localStorage.user_s).user_number;
      this.user_s.snumber = JSON.parse(localStorage.user_s).snumber;
    }
  },
  methods: {
    // 本地存储
    address(){
      localStorage.user_s = JSON.stringify(this.user_s);
    },
    // 手机号的if判断，封装的函数
    iphonen(n){
      var input = n.target
      if(this.user_s.user_number == ''){
        this.ts_number = '手机号不能为空';
        input.style.borderColor='red';
      }else if (!(/^1[345678]\d{9}$/.test(this.user_s.user_number))){
        this.t_number=true
        this.ts_number = '请输入正确的手机号'
        input.style.borderColor='red';
      }else{
        input.style.borderColor='#ccc';
         this.t_number=false
      }
    },
    // 备注手机号的if判断，封装的函数
    iphonea(n){
      var input = n.target
      if(!(/^1[345678]\d{9}$/.test(this.user_s.snumber))){
        this.number_s = true
        input.style.borderColor='red';
      }else{
        this.number_s = false
        input.style.borderColor='#ccc';
      }
    },
    // 用户名的if判断
    namec(n){
      var input = n.target
      if(this.user_s.users == ''){
        this.sname = true
        input.style.borderColor='red';
      }else{
        this.sname = false
        input.style.borderColor='#ccc';
      }
    },
    // 详细地址判断
    adds(n){
      var input = n.target
      if(this.user_s.add_d == ''){
        this.saddname = '请详细填写送餐地址'
        input.style.borderColor='red';
      }else if(!(/^\d{3,10}$/).test(this.user_s.add_d)){
          this.sadd = true;
          this.saddname = '送餐地址太短了，不能辨识'
          input.style.borderColor='red';
      }else{
        input.style.borderColor='#ccc';
        this.sadd = false;
        
      }
      
    },
    update_dtd(n){
      this.address();
    },
    update_dtn(n){
      this.iphonen(n);
      this.address();
    },
    update_dta(n) { 
      this.address();
      this.iphonea(n);
    },
    update_dts(n){
      this.address();
      this.adds(n);
    },
    update_dtc(n){
      this.namec(n);
      this.address();
    },
    add() {
      this.$axios
        .post(
          "https://elm.cangdu.org/v1/users/" + localStorage.uid + "/addresses",
          {
            address_detail: this.user_s.add_ress,
            address: this.user_s.add_d,
            name: this.user_s.users,
            phone: this.user_s.user_number,
            phone_bk: this.user_s.snumber,
            geohash: localStorage.add_geohash,
            poi_type: 0,
            sex: 1,
            tag: "公司",
            tag_type: 4
          }
        )
        .then(data => {
          if (data.data.status == 0) {
            alert(data.data.message);
          } else {
            alert(data.data.success);
            this.$router.push({ name: "add" });
            localStorage.removeItem("user_s");
          }
        });
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  background-color: #fff;
  margin-top: 1.2rem;
  padding-top: 0.15rem;
}
.content div {
  width: 100%;
  padding-bottom: 0.15rem;
  background: #fff;
}
.content div input {
  display: block;
  width: 6rem;
  font-size: 0.25rem;
  margin: 0 auto;
  padding: 0.15rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 0.07rem;
}
.content div p{
  height: 0.4rem;
  width: 6rem;
  font-size: 0.2rem;
  margin: 0 auto;
  color: red;
}
button {
  width: 95%;
  height: 0.6rem;
  margin: 0.3rem 0.16rem;
  background: #4cd964;
  border-radius: 0.05rem;
  border: none;
  color: #fff;
  font-size: 0.3rem;
}
</style>
