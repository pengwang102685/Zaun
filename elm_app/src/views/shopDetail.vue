<template>
    <div>
      <elmhead>
        <template v-slot:left><router-link to="/shop" class="lt">&lt;</router-link></template>
        <template v-slot:center>商家详情</template>
        <template v-slot:right></template>
      </elmhead>
      <div class="contain" style="padding:1rem 0;">
        <div class="activ">
          <h3 style="font-size:.3rem;color:gray;line-height:1rem;">活动与属性</h3>
          <p v-if="arr" v-for="i in arr" style="line-height:.5rem;padding:0 .2rem">
            <span class="color">{{i.icon_name}}</span><span>{{i.description}}</span><span>(APP专享)</span>
          </p>
          <p v-for="i in list.supports" style="padding:0 .2rem">
            <span class="color">{{i.icon_name}}</span><span>{{i.description}}</span><span>(APP专享)</span>
          </p>
        </div>
        <div class="Safety">
          <router-link :to="{name:'shopSafe',params:{list:list.status}}" style="font-size:.3rem;color:gray;line-height:1rem;">食品监督安全公示<span style="font-size:.3rem;color:gray;float:right">企业认证详情&gt;</span></router-link>
          <div style="display:flex;padding:.2rem 0;border-top:.01rem solid #ccc">
            <div><i class="iconfont filu" :class="{active:!list.status}" >{{list.status?'&#xe64d;':'&#xe619;'}}</i></div>
            <div class="color-gray"> 
              <p>监督检查结果：<span  class="filu" :class="{active:!list.status}">{{list.status?'良好':'差'}}</span></p>
              <p>检查日期：</p>
            </div>
          </div>
        </div>
        <div class="info">
          <h3>商家信息</h3>
          <p>{{list.name}}</p>
          <p>地址：{{list.address}}</p>
          <p>营业时间：{{list.opening_hours[0]}}</p>
          <p @click="type=true">营业执照<span style="float: right">&gt;</span></p>
          <p @click="type=true">餐饮服务许可证<span style="float: right">&gt;</span></p>
        </div>
        <div class="license" v-if="type" @click="type=false">
          <img :src="'https://elm.cangdu.org/img/'+list.image_path" alt="" style="position:absolute;top:30%;left:0;width:100%;height:4rem;">
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>
<style scoped>
.info,.Safety,.activ{
  background: white;
  margin-bottom: .2rem;
  padding: 0 .2rem;
}
.color-gray p{
  color: #ccc
}
.info p{
  line-height: .7rem;
  border-top: .01rem solid #ccc;
  font-size: .25rem;
  color: gray;
}
  
</style>
<script>
  import elmhead from '../components/head'
    export default {
        name: "s_assess",
        components:{
            elmhead,
        },
        data(){
          return{
              list:{},
              arr:[],
              type:false
          }
        },
        created() {
            this.list=this.$route.params.detail
            this.arr = this.$route.params.detail.activities
        }
    }
</script>

<style scoped>
.contain{
  padding: 0 .2rem;
  padding-top: 1rem;
}
.license{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 101;
}
p span{
  font-size: .2rem;
}
.iconfont{
  font-size: 1rem;
}
.filu{
  color: rgb(126, 211, 33);
}
.active{
  color: rgb(208, 2, 27);
}
</style>
