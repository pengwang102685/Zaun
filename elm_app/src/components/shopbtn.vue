<template>

  <div class="merchant">
    <div class="btn_ja" >
      <slot name="jia" @click="mulit">+</slot>
    </div>
    <div class="num">
      <slot  name="num"></slot>
    </div>
    <div>
      <slot name="jian"  @click="mulit"></slot>
    </div>
  </div>

</template>

<script>
    export default {
        name: 'merchant',
        data () {
            return {
                num: 0
            }
        },
        methods:{
            mulit(){
                this.$emit('int')
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .merchant{
    height: 20px;
    width: 80px;
    overflow: hidden;
    margin-top: .1rem;
  }
  .btn_ja,.btn_jn{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    border: none;
    font-size: 20px;
    box-sizing: border-box;
    float: right;
  }
  .btn_ja{
    background-color: #3190e8;
    color: #fff;
  }
  .num{
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    float: right;
    transition: .75s;
  }
  .v-enter{
    transform: translate(60px)
  }
  .v-enter-active{
    transition:  .35s;
  }
  .v-leave{
    transform: translate(20px)
  }
  .v-leave-active{
    transition:  .35s;
  }
</style>
