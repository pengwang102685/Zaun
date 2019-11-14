<template>
  <div class="invoice">
    <elmHead>
      <template v-slot:left>
        <router-link to="/about/confirmOrder">&lt;</router-link>
      </template>
      <template v-slot:center>订单备注</template>
    </elmHead>
    <section class="choose_invoice">
      <span>不需要开发票</span>
      <input type="checkbox" checked='true'>

    </section>

    <router-link to="/about/confirmOrder">
      <div class="determine">确定</div>
    </router-link>
  </div>
</template>
<script>
import elmHead from "../components/head";
export default {
  components: {
    elmHead
  },
}
</script>
<style scoped>
.circle {
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
.invoice {
  padding-top: 1rem;
  width: 100%;
  min-height: 15rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 111;
}
header {
  height: 1rem;
  line-height: 1rem;
  background-color: #3190e8;
  padding-left: 0.2rem;
  font-size: 0.24rem;
}
header span {
  color: #fff;
  font-weight: 500;
}
.order {
  margin-left: 35%;
}
.determine {
  background-color: #4cd964;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  margin: 0.2rem 0.4rem 0 0.4rem;
  line-height: 0.8rem;
  border-radius: 0.2rem;
}
.choose_invoice {
  padding-left: 0.2rem;
  vertical-align: middle;
  background: #fff;
  line-height: 1rem;
  margin: 0.2rem 0;
}
.choose_invoice span {
  vertical-align: bottom;
  font-size: 0.24rem;
  color: #333;
}
.choose_invoice input {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 3.8rem;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
