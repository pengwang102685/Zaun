<template>
  <div class="searchAddress">
    <header>
      <span @click="$router.back(-1)">&lt;</span>
      <span class="fc">添加地址</span>
    </header>
     <div class="add-detail">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="search_s" class="ipt">
        <button @click="search" class="button">确认</button>
      </div>
      <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
      <div class="point empty_tips" v-show="!poisdata">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>
      <div class="list_data">
          <ul>
              <li v-for="(i,index) in poisdata"  @click="adds(i)" :key="index">
                  <!-- <router-link :to="{name: 'adds'}"> -->
                  <p>{{i.name}}</p>
                  <p>{{i.address}}</p>
                  <!-- </router-link> -->
              </li>
          </ul>
      </div>
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
        poisdata:'', 
        search_s: ""
    };
  },
  created() {
  },
  methods: {
    adds(a){
      this.$router.push({name: 'addaddress', params: {name:a.address}})
        localStorage.add_geohash=a.geohash
    },
    search() {
      this.$axios
        .get("http://elm.cangdu.org/v1/pois?type=nearby",{params:{
            keyword:this.search_s
        }})
        .then(data => {
          this.poisdata = data.data
        });
    }
  }
};
</script>
<style scoped>
.searchAddress {
  width: 100%;
  min-height: 15rem;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.search1 {
  margin-top: 1rem;
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
header span:first-of-type {
  margin-left: 0.2rem;
}
.ipt {
  font-size: 0.3rem;
  color: #999;
  background-color: #f1f1f1;
  margin-left: 0.2rem;
  margin-top: 1.2rem;
  height: 0.6rem;
  border: none;
  border-radius: 0.15rem;
  padding: 0 0.4rem;
}
.button {
  width: 1.2rem;
  font-size: 0.1rem;
  color: #fff;
  background-color: #3190e8;
  border-radius: 0.1rem;
  margin-left: 0.2rem;
  height: 0.6rem;
  margin-top: 1.2rem;
  border: none;
  text-align: center;
}
.empty_tips {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;
}
.add-detail {
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: #fff;
  padding: 0.2rem;
}
.add-detail input {
  display: block;
  width: 5rem;
  padding: 0.17rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 0.05rem;
  font-size: 0.25rem;
}
.warnpart {
  background: #fff6e4;
  font-size: 0.25rem;
  color: #ff883f;
  text-align: center;
  padding: 0.1rem 0;
}
.point {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.point p {
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
  color: #969696;
  margin-bottom: 0.1rem;
}
.list_data li{
    padding: 0.15rem;
    border-bottom:0.01rem solid #ccc;
}
.list_data li p{
    font-size: 0.27rem;
    color: #969696;
}
</style>
