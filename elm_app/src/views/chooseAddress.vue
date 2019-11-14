<template>
  <div class="choose">
    <router-link to="/about/confirmOrder">
      <header>
        <span class="zuo">&lt;</span>
        <span class="fc">选择地址</span>
      </header>
    </router-link>
    <div class="add">
      <ul>
        <li v-for="(i,index) in arrdata" @click="btn(i)" :key="index" >
          <div style="float:left;height:1rem;line-height:1rem;margin-right:0.2rem;" v-show='type'>
            <span >✔</span>
          </div>
          <div>
            <span style="font-size:0.35rem;font-weight:800;">{{i.name}}</span>
            <span style="font-size:0.3rem;margin:0rem 0.15rem;">{{i.sex==1?'先生':'女士'}}</span>
            <span style="font-size:0.3rem;">{{i.phone}}</span>
          </div>
          <div style="width:100%;height:0.5rem;">
            <span class="tag">{{i.tag}}</span>
            <span style="font-size:0.3rem;float: left;">{{i.address_detail}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="newAddress">
      <span @click="toNewAddress()">新增收货地址</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      f: "",
      arrdata: "",
      type:false
    };
  },
  // beforeMount() {
  //   this.info();
  // },
  created(){
    this.info()
  },
   beforeRouteUpdate(to,from, next) {
      this.info()
      next()
  },
  methods: {
    toNewAddress() {
      this.$router.push({
        path: "/about/confirmOrder/chooseaddress/addaddress"
      });
    },
    btn(a){
      this.type=true
      this.$router.push({name: 'confirmOrder',params:{name:a}})
      this.$store.commit('setorderName',a.name)
      this.$store.commit('setorderSex',a.sex)
      this.$store.commit('setorderPhone',a.phone)
      this.$store.commit('setorderAddress_detail',a.address_detail)
      this.$store.commit('setorderTag',a.tag)
    },
    info(){
      this.$axios
        .get(
          "https://elm.cangdu.org/v1/users/" + localStorage.uid + "/addresses"
        )
        .then(data => {
          this.arrdata = data.data;
        });
    }
  },
};
</script>

<style scoped>
.add {
  margin-top: 1rem;
  background: #fff;
  height: 9rem;
  overflow-y: scroll;
}
.add li {
  padding: 0.35rem;
  border-bottom: 1px solid #ccc;
}
.tag {
  width: 0.5rem;
  height: 0.3rem;
  float: left;
  text-align: center;
  background-color: rgb(76, 217, 100);
  font-size: 0.2rem;
  color: #fff;
  margin-top: 0.08rem;
  margin-right: 0.2rem;
}
.choose {
  width: 100%;
  min-height: 15rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
}
.zuo {
  margin-left: 0.2rem;
}
header {
  background-color: #3190e8;
  position: fixed;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  z-index: 100;
}
.newAddress {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0rem;
  height: 1.38rem;
  line-height: 1.38rem;
  background: #fff;
}

.newAddress span {
  color: #3190e8;
  text-align: center;
  display: block;
}
</style>

<style>
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
.fc {
  margin-left: 30%;
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
</style>
