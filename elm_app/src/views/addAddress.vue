<template>
  <div class="addAddress">
    <header>
      <span @click="$router.back(-1)">&lt;</span>
      <span class="fc">添加地址</span>
    </header>
    <section class="page_text_container">
      <section class="section_list section_list1 clearfix">
        <span class="section_left fl lianxiren">联系人</span>
        <section class="section_right fr">
          <input type="text" name="name" placeholder="你的名字" class="input_style fr" v-model="username">
          <div class="choose_sex fr">
            <span class="choose_option fr">
              <input type="radio" name="myChoose" value="2" v-model="sex" >
              <span>女士</span>
            </span>
            <span class="choose_option fr">
              <input type="radio" name="myChoose"  value="1" v-model="sex">
              <span>先生</span>
            </span>
          </div>
        </section>
      </section>
      <section class="section_list section_list2 clearfix">
        <span class="section_left phone fl">联系电话</span>
        <section class="section_right fr">
          <div class="phone_add">
            <input type="text" name="phone" placeholder="你的手机号" class="input_style" v-model='usernumber'>
            
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jZCAT8E59/R+m9XO2KCOMTQrNRIpiaqsdtZzaIUqUeaPBTlQwUVvRaLBTO0SJMm802IkKJmorYkSunahtOCHzRm6ck9UIAAUncnSNNiYIJTB0+ZGb4EZ9jp4W6MIfDXa6BDO6JaPBjh4idOEDAOTZCsiDM8JjAAAAAElFTkSuQmCC"
              height="20"
              width="20"
              @click="type=true"
            >
            
          </div>
        </section>
        <section class="section_right fr" v-show="type">
          <input type="text" class="input_style" placeholder="备注电话" v-model="phone_bks">
        </section>
      </section>
      <section class="section_list section_list3">
        <span class="section_left songcanAddress fl">送餐地址</span>
        <section class="section_right fr">
          <div class="choose_address" contenteditable>
            <router-link to="/about/confirmOrder/chooseaddress/addaddress/searchaddress">
              <input
                type="text"
                placeholder="小区/写字楼/学校等"
                v-model="address"
                class="input_style"
              >
            </router-link>
          </div>
          <input
            type="text"
            name="address_detail"
            placeholder="详细地址（如门牌号等）"
            class="input_style input_style1"
            v-model="address_detail"
          >
        </section>
      </section>
      <section class="section_list section_list4 clearfix">
        <span class="section_left">标签</span>
        <section class="section_right fr">
          <input type="text" name="tag" placeholder="无/家/学校/公司" class="input_style" v-model="tag">
        </section>
      </section>
    </section>
    <div class="determine" @click="determine">确定</div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      usernumber: "",
      address: "",
      address_detail: "",
      tag: "",
      phone_bks: "",
      sex:'',
      type:false
    };
  },
  updated() {
    this.address = this.$route.params.name;
  },
  methods: {
    determine() {
      this.$axios
        .post(
          "https://elm.cangdu.org/v1/users/" + localStorage.uid + "/addresses",
          {
            user_id: localStorage.uid,
            address: this.address /*地址*/,
            address_detail: this.address_detail /*地址详情*/,
            geohash: localStorage.add_geohash, //经纬度
            name: this.username, //收货人姓名
            phone: this.usernumber, //电话号码
            tag: this.tag, //标签
            sex: Number(this.sex), //性别， 1:男，2:女
            tag_type:1,
            phone_bk:this.phone_bks
          }
        )
        .then(data => {
          if(data.data.status=='1'){
            this.$router.push({path:'/about/confirmOrder/chooseaddress'})
          }
        });
    }
  }
};
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
.addAddress {
  width: 100%;
  min-height: 15rem;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #f5f5f5;
  z-index: 101;
}

header {
  background-color: #3190e8;
  position: fixed;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  z-index: 100;
  margin-bottom: 1rem;
}
header span:first-of-type {
  margin-left: 0.2rem;
}
.section_list1 {
  padding-top: 1.2rem;
  position: relative;
}
.lianxiren {
  position: absolute;
  left: 0.1rem;
  top: 1.1rem;
}
.section_list2 {
  position: relative;
  padding-top: 0.2rem;
  padding-right: 0.2rem;
}
.phone {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.section_list3 {
  position: relative;
  margin-top: -0.2rem;
  overflow: hidden;
}
.songcanAddress {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.section_list4 {
  position: relative;
  padding-top: 0.2rem;
  overflow: hidden;
  vertical-align: middle;
  padding-left: 0.2rem;
}

.section_list {
  background-color: #fff;
  border-bottom: 0.025rem solid #f5f5f5;
  padding-bottom: 0.2rem;
}
.section_list .section_left {
  width: 20%;
  font-size: 0.3rem;
  color: #333;
  line-height: 1rem;
}
.section_list .section_right .input_style {
  width: 80%;
  height: 0.8rem;
  font-size: 0.3rem;
  color: #999;
  border: none;
  outline: none;
}
.input_style1 {
  width: 90%;
}
.section_list .section_right .choose_sex {
  line-height: 1rem;
  border-top: 0.025rem solid #f5f5f5;
}
.section_list .section_right .choose_sex .choose_option {
  font-size: 0.3rem;
  color: #333;
  display: flex;
  align-items: center;
  margin-right: 0.8rem;
}
.section_list .section_right .phone_add {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.section_list .section_right .choose_address a {
  font-size: 0.3rem;
  color: #999;
  line-height: 1rem;
  border-bottom: 0.025rem solid #f5f5f5;
  outline: none;
}
.address_page input,
.address_page p,
.address_page span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.determine {
  background-color: #4cd964;
  font-size: 0.4rem;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin: 0 0.7rem;
  line-height: 1rem;
  border-radius: 0.2rem;
  margin-top: 0.6rem;
}
</style>
