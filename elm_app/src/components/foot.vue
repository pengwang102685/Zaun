<template>
  <div class="about">
    <div class="footer">
        <router-link :to='{path:"/about/Takeaway", query: {geohash: geohash}}' class="link">
            <i class="iconfont" :class="{active:n==0}">&#xe603;</i>
            <p>外卖</p>
        </router-link>
        <router-link to="/about/search" class="link">
            <i class="iconfont" :class="{active:n==1}">&#xe600;</i>
            <p>搜索</p>
        </router-link>
        <router-link to="/about/Order" class="link">
            <i class="iconfont" :class="{active:n==2}">&#xe601;</i>
            <p>订单</p>
        </router-link>
        <router-link to="/about/user" class="link">
            <i class="iconfont" :class="{active:n==3}">&#xe602;</i>
            <p>我的</p>
        </router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
    export default {
        name: 'home',
        props: ["num"],
        data(){
            return{
                geohash:'',
                n:0,
            }
        },
        created(){
          this.n=this.num
          this.geohash=localStorage.geohash
        }
    }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .footer{
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 100;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    font-size: 0.2rem;
    padding: 0.05rem 0;
  }
  .active{
      color: rgb(49, 144, 232);
  }
  .footer .iconfont{
      font-size: 0.4rem;
  }
  .link{
    text-decoration: none;
    display: inline-block;
    width: 25%;
    color: #666;
    font-size:0.2rem;
  }
  .link p{
    font-size: 0.24rem;
  }
</style>
