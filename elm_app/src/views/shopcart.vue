<template>
  <div>
   <div><div class="icon"><slot name="iconfont"></slot><span><slot name="num"></slot></span></div></div>
    <div class="shop_price"><div ><slot name="price"></slot><p style="color: #fff">配送费￥5</p></div></div>
    <div><slot name="pick_up"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "shop_cart",
        data(){
            return{
                num:0
            }
        },
        methods:{
            mulit(){
                this.$emit('type')
            }
        }
    }
</script>

<style scoped>
 .shop_price{
  position: absolute;
  top: 0;
  left: 1.7rem;
   color: #fff;
}
.icon{
  position: absolute;
  top: -.3rem;
  left: .2rem;
  background: #3d3d3f;
  border: solid .05rem #444;
  border-radius: 50%;
  padding: .15rem .1rem .1rem.1rem;
  line-height: .7rem;
  z-index: 999;
}

 .iconfont{
  width: .7em;
  height: .7em;
  font-size: .8rem;
  color: #fff;
}

</style>
